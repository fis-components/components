/**
 * 将 node  中不能在浏览器中用的语句去掉。
 */

var jstransform = require('jstransform');
var Syntax = require('jstransform').Syntax
var utils = require('jstransform/src/utils');
var escope = require('escope');
var esprima = require('esprima');

function createEnvify(env) {
  function visitProcessEnv(traverse, node, path, state) {
    var key = node.property.name || node.property.value

    var value = env[key]
    if (value !== undefined) {
      replaceEnv(node, state, value)
      return false
    }

    return false
  }

  function replaceEnv(node, state, value) {
    utils.catchup(node.range[0], state)
    utils.append(JSON.stringify(value), state)
    utils.move(node.range[1], state)
  }

  visitProcessEnv.test = function(node, path, state) {
    return (
      node.type === Syntax.MemberExpression
      && !(path[0].type === Syntax.AssignmentExpression && path[0].left === node)
      && node.property.type === (node.computed ? Syntax.Literal : Syntax.Identifier)
      && node.object.computed === false
      && node.object.type === Syntax.MemberExpression
      && node.object.object.type === Syntax.Identifier
      && node.object.object.name === 'process'
      && node.object.property.type === Syntax.Identifier
      && node.object.property.name === 'env'
    )
  }

  return visitProcessEnv
}

function createGlobal() {
  function visitGlobal(traverse, node, path, state) {
    var idx = 0;
    while (path[idx]) {
      if (path[idx].type === Syntax.FunctionExpression || path[idx].type === Syntax.Program ) {
        var scopes = escope.analyze(path[idx]).scopes.filter(function(item) {
          return item.block === path[idx];
        });
        var resolved = false;

        scopes.every(function(scope) {
          if (findVar(scope, node.name)) {
            resolved = true;
            return false;
          }

          return true;
        });

        if (resolved) {
          return false;
        }
      }

      idx++;
    }

    utils.catchup(node.range[0], state)
    utils.append('window', state)
    utils.move(node.range[1], state)
  }

  visitGlobal.test = function(node, path, state) {
    return (
      node.type === Syntax.Identifier && 
      path[0].type === Syntax.MemberExpression && path[0].object === node &&
      node.name === "global"
    )
  }

  function findVar(scope, name) {
      var refs = scope.variables;
      var i = 0;
      var ref;

      while ((ref = refs[i++])) {

          if (ref.name === name) {
              return ref;
          }
      }
  }

  return visitGlobal;
}


module.exports = function(content) {
  var visitors = [createEnvify({
    NODE_ENV: 'production'
  }), createGlobal()];
  return jstransform.transform(visitors, content).code
}

// console.log(module.exports('(function(){  var global2 = global.xxx; global.xxx = xxx;if (process.env.NODE_ENV === "production") {xx.global.xxx =1;} })();(function() {var global = 1; global.xxx = 1;})();'));

