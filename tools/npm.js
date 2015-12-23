require('shelljs/global');
const fs = require('fs');
const path = require('path');
const write = fs.writeFileSync;
const assign = require('object-assign');

const args = process.argv.slice(2);
const packages = [];
const PREFIX = '\'use strict\';\n\nmodule.exports = (function() {\n    return [\n';
const AFFIX = '\n    ]\n})();';

const repos = require('./repos.json');

function escapeReg(str) {
  return new String( str ).replace(
   /([\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\])/g,
   '\\$1'
  );
}

rm('-rf', path.join(__dirname, 'node_modules'));
rm('-rf', path.join(__dirname, 'builds'));

mkdir('-p', path.join(__dirname, 'builds'));

const modules = find('modules').map(function(file) {
  return path.basename(file, '.js');
}); 

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

  if (repos[config.name]) {
    config.repos = repos[config.name];
  } else if (json.repository) {
    var parts = json.repository.url.split('/');
    parts = parts.splice(parts.length -2, 2);

    config.repos = 'https://github.com/' + parts.join('/');
  } else {
    config.repos = 'https://github.com/2betop/placeholder.git';
  }
  
  config.main = json.main;
  config.tag = 'master';
  config.reposType = 'npm';

  if (json.dependencies) {
    var dependencies = [];
    Object.keys(json.dependencies).forEach(function(key) {
      if (!~modules.indexOf(key)) {
        args.push(key);
      }

      dependencies.push(key + '@' + json.dependencies[key])
    });
    config.dependencies = dependencies;
  }

  var versions = Array.isArray(json.versions) ? json.versions.reverse().slice(0, 3).reverse() : [json.version];
  
  var items = [];
  versions.forEach(function(version) {
    var item = assign({}, config);
    item.version = version;
    item.build = 'rm package.json && npm install --prefix . ' + item.name + '@' + version;

    if (exec('npm install --prefix '+ __dirname +' ' + item.name + '@' + version).code !== 0) {
      return;
    }
    var pkgPath = path.join(__dirname, 'node_modules', item.name);

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

    if (json.browser) {
      item.mapping.push({
        reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(json.browser) + ")$/i",
        release: '$1'
      });

      item.main = json.browser;
    } else {
      var main = (json.main || 'index.js').replace(/^\.\//, '').replace(/\/$/, '/index');

      if (!test('-f', path.join(pkgPath, main)) && test('-d', path.join(pkgPath, main))) {
        main = path.join(main, 'index');
      }

      if (path.dirname(main) === 'dist') {
        item.mapping.push({
          reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$/i",
          release: '$1'
        });
        config.main = item.main = main.replace(/^dist\//, '');
      } else if (test('-f', path.join(pkgPath, 'dist', item.name + '.js'))) {
        item.mapping.push({
          reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$/i",
          release: '$1'
        });
        config.main = item.main = item.name + '.js';
      } else if (path.dirname(main) === '.' || path.dirname(main) === '') {
        item.mapping.push({
          reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/(.*\\.js)$/i",
          release: '$1'
        });
      } else if (path.dirname(main) === 'lib' || main === 'lib') {
        // skip
      } else if (path.dirname(main)) {
        var dirname = path.dirname(main);

        item.mapping.push({
          reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(dirname) + "\\/(.*)$/i",
          release: dirname + '/$1'
        });
      }

      ['assets', 'style'].forEach(function(assetDir) {
        if (test('-d', path.join(pkgPath, assetDir))) {
          item.mapping.push({
            reg: "/^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(assetDir) + "\\/(.*)$/i",
            release: assetDir + '/$1'
          });
        }
      });

      item.mapping.push({
        reg: "/^\\/README\\.md$/i",
        release: '$&'
      });

      item.mapping.push({
        reg: '*',
        release: false
      });  
    }

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
