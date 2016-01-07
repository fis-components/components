const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const exists = fs.existsSync;

function isFile(filepath) {
  return fs.lstatSync(filepath).isFile()
}

module.exports = function(folder, entry) {
  var enties = [];
  var deps = [];
  var doing = [];

  if (typeof entry === 'string') {
    entry = [entry];
  }

  entry.forEach(function(entry) {
    collect(resolve(entry));  
  });
  
  return {
    enties: enties,
    deps: deps
  };

  function resolve(entry) {
    var resolved = null;

    ['', '.js', '.jsx', '.es', '.es6', '.ts', '.tsx', '.coffee', '.cjsx'].every(function(affix) {
      var realpath = path.join(folder, entry + affix);

      if (exists(realpath)) {
        resolved = realpath;
        return false;
      }

      return true;
    })

    return resolved || path.join(folder, entry);
  }

  function collect(realpath) {
    if (~doing.indexOf(realpath))return;
    if (exists(realpath) && isFile(realpath)) {
      doing.push(realpath);
      var shortpath = path.relative(folder, realpath);
      enties.push(shortpath);

      var content = read(realpath, 'utf8');

      content.replace(/"(?:[^\\"\r\n\f]|\\[\s\S])*"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|(\/\/[^\r\n\f]+|\/\*[\s\S]+?(?:\*\/|$))|\b(require|_dereq_)\s*\(\s*('|")(.+?)\3\s*\)/g, function(m, comment, type, quote, value) {
        if (comment || !value)return;
        console.log(value);

        if (value[0] === '.') {
          type === 'require' && collect(resolve(path.join(path.dirname(shortpath), value)));
        } else {
          var dep = value.split('/')[0];

          if (!~deps.indexOf(dep)) {
            deps.push(dep);
          }
        }
      });
    }
  }
}

// var ret = module.exports(path.join(__dirname, 'node_modules/socket.io-client'), 'socket.io.js');
// console.log(ret);