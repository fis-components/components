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

rm('-rf', path.join(__dirname, 'node_modules'));
rm('-rf', path.join(__dirname, 'builds'));

mkdir('-p', path.join(__dirname, 'builds'));

while (args.length) {
  var arg = args.shift();

  if (~packages.indexOf(arg))continue;

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

  var versions = Array.isArray(json.versions) ? json.versions.reverse().slice(0, 5).reverse() : [json.version];
  
  var items = [];
  versions.forEach(function(version) {
    var item = Object.assign({}, config);
    item.version = version;
    item.build = 'rm package.json && npm install --prefix . ' + item.name + '@' + version;

    if (exec('npm install --prefix '+ __dirname +' ' + item.name + '@' + version).code !== 0) {
      return;
    }

    item.mapping = [];

    item.mapping.push({
      reg: "/\\bmin\\b|__tests__|gulpfile\\.js|webpack\\.config\\.js|gruntfile\\.js|test\\.js/i",
      release: false
    });

    if (test('-d', path.join(__dirname, 'node_modules', item.name, 'lib'))) {
      item.mapping.push({
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/lib\\/(.*)$/i",
        release: 'lib/$1'
      });
    }

    var main = json.main.replace(/^\.\//, '');

    if (path.dirname(main) === '.' || path.dirname(main) === '') {
      item.mapping.push({
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/(.*\\.js)$/i",
        release: '$1'
      });
    }

    if (path.dirname(main) === 'dist') {
      item.mapping.push({
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$/i",
        release: '$1'
      });
      config.main = item.main = main.replace(/^dist\//, '');
    }

    if (test('-d', path.join(__dirname, 'node_modules', item.name, 'assets'))) {
      item.mapping.push({
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/assets\\/(.*)$/i",
        release: 'assets/$1'
      });
    }

    item.mapping.push({
      reg: "/^\\/README\\.md$/i",
      release: '$&'
    });

    item.mapping.push({
      reg: '*',
      release: false
    });

    var str = JSON.stringify(item, null, 2);
    str = str.replace(/('|")\/(.*)\/([ig]*)\1/g, function(_, quote, value, flag) {
      return '/' + value.replace(/\\\\/g, '\\') + '/' + flag;
    });
    items.push(str);
  });

  if (!items.length) {
    continue;
  }
  
  var contents = PREFIX + items.join(',\n\n') + AFFIX;
  write(path.join(__dirname, "builds", config.name + '.js'), contents);
  console.log('Created %s', config.name + '.js');
  packages.push(config.name)
}
