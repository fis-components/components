require('shelljs/global');
const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const assign = require('object-assign');
const argv = require('minimist')(process.argv.slice(2));
const semver = require('semver');
const deepEqual = require('deep-equal');
var hash = require('object-hash');

const args = argv._.concat();
const packages = [];
const overrided = require('./override.json');
const browserIgnore = require('./browser.ignore.json');
const ignore = require("./ignore.json");

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
  var parts = arg.split('@');
  var pkgName = parts[0];
  var pkgVersion = parts[1];

  if (~packages.indexOf(pkgName) || ~ignore.indexOf(pkgName))continue;

  console.log('\n.....................')
  console.log('Analyzing %s@%s', pkgName, pkgVersion);
  console.log('.......................\n')

  var info = exec('npm info ' + pkgName, {silent:true}).output;
  /({[\s\S]*})/.test(info) && (info = RegExp.$1)
  // var json = JSON.parse(info);
  var infoJson = (new Function("return " + info))();

  var versions = Array.isArray(infoJson.versions) ? infoJson.versions : [infoJson.version];
  versions = versions.filter(function(version) {
    return semver.valid(version);
  })
  
  if (pkgVersion) {
    versions = versions.filter(function(version) {
      return semver.satisfies(version, pkgVersion);
    });
  } else if (!argv.hasOwnProperty('versions-count') || argv['versions-count'] != '0') {
    var versionsCount = parseInt(argv['versions-count']) || 3;
    versions = versions.reverse().slice(0, versionsCount).reverse();
  }

  var items = [];
  versions.forEach(function(version) {
    var item = {};
    item.version = version;
    item.build = 'rm package.json && npm install --prefix . ' + pkgName + '@' + version;

    if (exec('npm install --prefix '+ __dirname +' ' + pkgName + '@' + version).code !== 0) {
      return;
    }
    var pkgPath = path.join(__dirname, 'node_modules', pkgName);
    var json = JSON.parse(read(path.join(pkgPath, 'package.json'), 'utf8'));
    item.name = json.name;
    item.description = json.description;

    if (json.repository) {
      var parts = json.repository.url.split('/');
      parts = parts.splice(parts.length -2, 2);

      item.repos = 'https://github.com/' + parts.join('/');
    } else {
      item.repos = 'https://github.com/2betop/placeholder.git';
    }
    
    json.main && (item.main = json.main);
    item.tag = 'master';
    item.reposType = 'npm';

    if (json.dependencies) {
      var dependencies = [];
      Object.keys(json.dependencies).forEach(function(key) {
        if (browserIgnore[item.name] && ~browserIgnore[item.name].indexOf(key)) {
          return;
        }

        // if (!~modules.indexOf(key)) {
          args.push(key + '@' + json.dependencies[key]);
        // }

        dependencies.push(key + '@' + json.dependencies[key])
      });
      item.dependencies = dependencies;
    }
    

    item.mapping = [];

    item.mapping.push({
      reg: "\\bmin\\b|__tests__|gulpfile\\.js|webpack\\.config\\.js|gruntfile\\.js|test\\.js",
      release: false
    });

    item.mapping.push({
      reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(?:test|build|dist\\/cdn)\\/",
      release: false
    });

    if (test('-d', path.join(__dirname, 'node_modules', item.name, 'lib'))) {
      item.mapping.push({
        reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/lib\\/(.*)$",
        release: 'lib/$1'
      });
    }

    if (json.browser) {
      item.mapping.push({
        reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(json.browser) + ")$",
        release: '$1'
      });

      item.main = json.browser;
    } else {
      var main = (json.main || 'index.js').replace(/^\.\//, '').replace(/\/$/, '/index');

      if (!test('-f', path.join(pkgPath, main)) && test('-d', path.join(pkgPath, main))) {
        main = path.join(main, 'index');
      }

      // console.log(json, main)

      if (/^dist/.test(main)) {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$",
          release: '$1'
        });
        item.main = item.main = main.replace(/^dist\//, '');
      } else if (test('-f', path.join(pkgPath, 'dist', item.name + '.js'))) {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$",
          release: '$1'
        });
        item.main = item.main = item.name + '.js';
      } else if (path.dirname(main) === '.' || path.dirname(main) === '') {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(.*\\.(?:js|css))$",
          release: '$1'
        });
      } else if (path.dirname(main) === 'lib' || main === 'lib') {
        // skip
      } else if (path.dirname(main)) {
        var dirname = path.dirname(main);

        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(dirname) + "\\/(.*)$",
          release: dirname + '/$1'
        });
      }
    }

    ['assets', 'style', 'fonts', 'css'].forEach(function(assetDir) {
      if (test('-d', path.join(pkgPath, assetDir))) {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(assetDir) + "\\/(.*)$",
          release: assetDir + '/$1'
        });
      }
    });

    item.mapping.push({
      reg: "^\\/README\\.md$",
      release: '$&'
    });

    item.mapping.push({
      reg: "^\\/LICENSE\\.md$",
      release: '$&'
    });

    item.mapping.push({
      reg: '\\.*',
      release: false
    });  

    overrided[pkgName] && assign(item, overrided[pkgName]);

    items.push(item);
  });

  if (!items.length) {
    continue;
  }

  if (!argv.override && test('-f', path.join(__dirname, '../packages/' + pkgName + '.json'))) {
    console.log('Merging...')
    var pkgs = (function() {
      var pkg = require('../packages/' + pkgName + '.json');
      var pkgs = {};
      var tags = pkg.tags;

      tags.forEach(function(tag) {
          var data = assign({}, pkg, tag);
          delete data.tags;
          pkgs[data.version] = data;
      });
      return pkgs;
    })();
    var allSkiped = true;
    items.forEach(function(item) {
      if (pkgs[item.version]) {
        var clone = assign({}, pkgs[item.version]);
        delete clone.__hash;

        if (deepEqual(clone, item)) {
          return;
        }
      }
      allSkiped = false;
      pkgs[item.version] = item;
    });

    if (allSkiped) {
      console.log("Nothing changed, skiped!")
      packages.push(pkgName);
      continue;
    }

    items = Object.keys(pkgs).sort(function(a, b) {
      return semver.compare(a, b);
    }).map(function(version) {
      return pkgs[version];
    })
  }


  (function() {
    var config = assign({}, items[0]);

    delete config['version'];
    delete config['__hash'];
    config.tags = items.map(function(tag) {
      var clone = assign({}, tag);

      Object.keys(tag).forEach(function(key) {
        if (tag[key] && config[key] && deepEqual(tag[key], config[key])) {
          delete clone[key];
        }
      });

      return clone;
    });
    write(path.join(__dirname, "builds", pkgName + '.json'),  JSON.stringify(config, null, 2));
    console.log('Created %s', pkgName + '.json');
    packages.push(pkgName);
  })();
}
