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

function createGlobal(content) {
  var ast = esprima.parse(content, {
      range: true,
      tokens: true
  });
  var scopes = escope.analyze(ast).scopes;
  var gs = scopes.filter(function(scope) {
      return scope.type == 'global';
  })[0];

  function visitGlobal(traverse, node, path, state) {
    var varGlobal = findVar(gs, node.name);

    if (varGlobal) {
        return false;
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
      var ref, childScope;

      while ((ref = refs[i++])) {

          if (ref.name === name) {
              return ref;
          }
      }

      i = 0;

      while ((childScope = scope.childScopes[i++])) {

          if ((ref = findVar(childScope, name))) {
              return ref;
          }
      }
  }

  return visitGlobal;
}


module.exports = function(content) {
  var visitors = [createEnvify({
    NODE_ENV: 'production'
  }), createGlobal(content)];
  return jstransform.transform(visitors, content).code
}

// console.log(module.exports('var global2 = global.xxx; global.xxx = xxx;if (process.env.NODE_ENV === "production") {xx.global.xxx =1;}'));

