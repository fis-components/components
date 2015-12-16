require('shelljs/global');
const fs = require('fs');
const path = require('path');
const write = fs.writeFileSync;

const args = process.argv.slice(2);
const packages = [];
const PREFIX = '\'use strict\';\n\nmodule.exports = (function() {\n    return [\n';
const AFFIX = '\n    ]\n})();';

function escapeReg(str) {
  return new String( str ).replace(
   /([\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\])/g,
   '\\$1'
  );
}

while (args.length) {
  var arg = args.shift();

  var info = exec('npm info ' + arg, {silent:true}).output;
  /({[\s\S]*})/.test(info) && (info = RegExp.$1)
  // var json = JSON.parse(info);
  var json = (new Function("return " + info))();

  var config = {};
  config.name = json.name;
  config.description = json.description;
  config.repos = json.repository.url;
  config.main = json.main;
  config.tag = 'master';

  if (json.dependencies) {
    var dependencies = [];
    Object.keys(json.dependencies).forEach(function(key) {
      args.push(key);
      dependencies.push(key + '@' + json.dependencies[key])
    });
    config.dependencies = dependencies;
  }

  const versions = json.versions.reverse().slice(0, 5);

  var items = [];
  versions.forEach(function(version) {
    var item = Object.assign({}, config);
    item.version = version;
    item.build = 'rm package.json && npm install --prefix . ' + item.name + '@' + version;

    item.mapping = [
      {
        reg: "/\\bmin\\b|__tests__/i",
        release: false
      },

      {
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/lib\\/(.*)$/i",
        release: 'lib/$1'
      },

      {
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/assets\\/(.*)$/i",
        release: 'assets/$1'
      },

      {
        reg: "/^\\/README\\.md$/i",
        release: '$&'
      },
      {
        reg: '*',
        release: false
      }
    ];

    var str = JSON.stringify(item, null, 2);
    str = str.replace(/('|")\/(.*)\/([ig]*)\1/g, function(_, quote, value, flag) {
      return '/' + value.replace(/\\\\/g, '\\') + '/' + flag;
    });
    items.push(str);
  });
  
  var contents = PREFIX + items.join(',\n\n') + AFFIX;
  write(path.join(__dirname, "builds", config.name + '.js'), contents);
  console.log('Created %s', config.name + '.js');
}
