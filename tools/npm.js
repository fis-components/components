require('shelljs/global');
const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const write = fs.writeFileSync;
const assign = require('object-assign');
const argv = require('minimist')(process.argv.slice(2));
const semver = require('semver');
const deepEqual = require('deep-equal');
const minimatch = require('minimatch');
var hash = require('object-hash');
const collect = require('./collect');
const finder = require('../finder.js');

const args = argv._.concat();
const packages = [];
const ignore = require("./ignore.json");

function escapeReg(str) {
  return new String( str ).replace(
   /([\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\])/g,
   '\\$1'
  );
}

// rm('-rf', path.join(__dirname, 'node_modules'));
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

  if (~packages.indexOf(pkgName)) continue;

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

  if (pkgVersion === 'latest') {
    versions = [infoJson.version];
  } else if (/^latest(\d+)$/.test(pkgVersion)) {
    var versionsCount = parseInt(RegExp.$1) || 3;
    versions = versions.reverse().slice(0, versionsCount).reverse();
  } else if (pkgVersion) {
    versions = versions.filter(function(version) {
      return semver.satisfies(version, pkgVersion);
    });
  } else if (!argv.hasOwnProperty('versions-count') || argv['versions-count'] != '0') {
    var versionsCount = parseInt(argv['versions-count']) || 3;
    versions = versions.reverse().slice(0, versionsCount).reverse();
  }

  var items = [];
  versions.forEach(function(version) {
    if (isIgnored(pkgName, version)) {
      console.log('%s@%s is skipped, due to settings in ignore.json', pkgName, version);
      return;
    }
    var pkgPath = path.join(__dirname, 'node_modules', pkgName);
    var item = {};
    item.version = version;
    item.build = 'rm package.json && npm install --prefix . ' + pkgName + '@' + version;
    var json;

    if (
      (
        !test('-f', path.join(pkgPath, 'package.json'))
        || !(json = JSON.parse(read(path.join(pkgPath, 'package.json'), 'utf8')))
        || json.version !== version
      )
      && exec('npm install --prefix '+ __dirname +' ' + pkgName + '@' + version).code !== 0) {

      return;
    }
    json = json || JSON.parse(read(path.join(pkgPath, 'package.json'), 'utf8'));
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
    json.files && (item.files = json.files);
    var overrided = getOverride(pkgName, version);
    if (overrided && overrided.dependencies) {
      json.dependencies = overrided.dependencies;
      if (Array.isArray(json.dependencies)) {
        var tmp = {};
        json.dependencies.forEach(function(dep) {
          var parts = dep.split('@');
          var key = parts[0];
          var value = parts[1];
          tmp[key] = value;
        });
      }
      delete overrided.dependencies;
      json.dependencies = tmp;
    }

    var npmDependencies = json.dependencies || {};
    if (json.peerDependencies) {
      assign(npmDependencies, json.peerDependencies);
    }

    // if (overrided && overrided.ignoreDependencies) {
    //   var ignoreDependencies = overrided.ignoreDependencies;

    //   Object.keys(npmDependencies).forEach(function(key) {
    //     var parts = key.split('@');

    //     if (~ignoreDependencies.indexOf(parts[0])) {
    //       delete npmDependencies[key];
    //     }
    //   });

    //   delete overrided.ignoreDependencies;
    // }

    if (npmDependencies) {
      var dependencies = [];
      Object.keys(npmDependencies).forEach(function(key) {
        dependencies.push(key + '@' + npmDependencies[key])
      });
      item.dependencies = dependencies;
    }

    overrided && assign(item, overrided);

    if (!item.mapping) {
      item.mapping = [];

      item.mapping.push({
        reg: "\\bmin\\b|__tests__|gulpfile\\.js|webpack\\.config\\.js|gruntfile\\.js|test\\.js",
        release: false
      });

      item.mapping.push({
        reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(?:test|dist\\/cdn|lib\\/node)\\/",
        release: false
      });

      var startFiles = [];

      if (item.browser) {
        if (typeof item.browser === 'object') {
          item.paths = assign({}, item.browser);
          item.main = item.paths[item.main] || item.main;
          item.main && startFiles.push(item.main);

          Object.keys(item.paths).forEach(function(key) {
            item.shim = item.shim || {};
            if (!item.shim['**/*.js']) {
              item.shim['**/*.js'] = {
                replace: []
              };
            };

            if (/^[^\.\/]+/.test(key)) {
              item.shim['**/*.js'].replace.push(
                {
                  from: '/\\brequire\\s*\\(\\s*(\'|")' + escapeReg(key) + '\\b/ig',
                  to: 'require($1' + item.paths[key]
                }
              );
              delete item.paths[key];
            } else {
              startFiles.push(item.paths[key]);



              item.shim['**/*.js'].replace.push(
                {
                  from: '/\\brequire\\s*\\(\\s*(\'|")' + escapeReg(key.replace(/\.js$/, '')) + '(?:\\.js)?\\b/ig',
                  to: 'require($1' + item.paths[key]
                }
              );
            }
          });

          var ret = collect(pkgPath, startFiles);
          var deps = ret.deps = ret.deps.map(function(name) {
            return item.browser[name] || name;
          });

          ret.enties.forEach(function(shorpath) {
            if (/^(lib|modules|release)/i.test(shorpath))return;

            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(shorpath) + ")$",
              release: '$1'
            });
          });

          if (test('-d', path.join(pkgPath, 'lib'))) {
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/lib\\/(.*)$",
              release: 'lib/$1'
            });

            deps.push.apply(deps, collect(pkgPath, finder(pkgPath, ['lib/**/*.js', '!lib/node/**/*.js']).map(function(item) {
              return item.relative;
            })).deps);
          }

          if (test('-d', path.join(pkgPath, 'modules'))) {
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/modules\\/(.*)$",
              release: 'modules/$1'
            });

            deps.push.apply(deps, collect(pkgPath, finder(pkgPath, ['modules/**/*.js', '!modules/node/**/*.js']).map(function(item) {
              return item.relative;
            })).deps);
          }

          if (test('-d', path.join(pkgPath, 'release'))) {
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/release\\/(.*)$",
              release: 'release/$1'
            });

            deps.push.apply(deps, collect(pkgPath, finder(pkgPath, ['release/**/*.js', '!release/node/**/*.js']).map(function(item) {
              return item.relative;
            })).deps);
          }

          item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
            var name = item.split('@')[0];
            return ~deps.indexOf(name);
          }));
        } else {

          var main = item.browser.replace(/^\.\//, '').replace(/\/$/, '/index');

          if (!test('-f', path.join(pkgPath, main)) && test('-d', path.join(pkgPath, main))) {
            main = path.join(main, 'index');
          }

          var ret = collect(pkgPath, main);

          ret.enties.forEach(function(shorpath) {
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(shorpath) + ")$",
              release: '$1'
            });
          });

          item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
            var name = item.split('@')[0];
            return ~ret.deps.indexOf(name);
          }));

          item.main = item.browser;
        }
      } else if (item.jspm) {
        convertFromJspm(item, item, pkgName, pkgPath);
      } else if (test('-d', path.join(pkgPath, 'dist')) && !item.ignoreDIST) {
        var main = item.main.replace(/^\.\//, '').replace(/\/$/, '/index');

        if (!/^dist/.test(main)) {
          if (test('-f', path.join(pkgPath, 'dist', item.name + '.js'))) {
            main = 'dist/' + item.name;
          } else if (test('-f', path.join(pkgPath, 'dist', 'index.js'))) {
            main = 'dist/index';
          } else if (test('-f', path.join(pkgPath, main.replace(/^lib/, 'dist')))) {
            main = main.replace(/^lib/, 'dist')
          } else {
            main = find(path.join(pkgPath, 'dist'))
              .filter(function(filepath) {
                return filepath.match(/\.js$/);
              })
              .map(function(filepath) {
                return filepath.substring(pkgPath.length + 1);
              })[0];
          }
        }

        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/dist\\/(.*)$",
          release: '$1'
        });
        item.main = item.main = main.replace(/^dist\//, '');
        item.paths = item.paths || {};
        item.paths.dist = '.';

        // 分析去掉没用的依赖。
        if (item.dependencies) {
          startFiles.push.apply(startFiles, finder(pkgPath, 'dist/**/*.js').map(function(item) {
            return item.relative;
          }))

          var ret = collect(pkgPath, startFiles);

          item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
            var name = item.split('@')[0];
            return ~ret.deps.indexOf(name);
          }));
        }
      } else if (item.files && item.files.length) {
        var folders = [];

        item.main && startFiles.push(item.main);

        item.files.forEach(function(filepath) {
          if (test('-d', path.join(pkgPath, filepath))) {
            folders.push(filepath.replace(/^\.\//, ''));
          } else if (/\.js$/.test(filepath)) {
            startFiles.push(filepath);
          } else {
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(filepath) + ")$",
              release: '$1'
            });
          }
        });

        var ret = collect(pkgPath, startFiles);
        var deps = ret.deps.concat();
        var rFolder = folders.length ? new RegExp("^(" + folders.map(escapeReg).join('|') + ")", 'i') : null;

        ret.enties.forEach(function(shorpath) {
          if (rFolder && rFolder.test(shorpath))return;

          item.mapping.push({
            reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(shorpath) + ")$",
            release: '$1'
          });
        });

        folders.forEach(function(folder) {
          if (test('-d', path.join(pkgPath, folder))) {
            folder = folder.replace(/\//, '');
            item.mapping.push({
              reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(folder) + "\\/(.*)$",
              release: folder + '/$1'
            });

            deps.push.apply(deps, collect(pkgPath, finder(pkgPath, folder + '/**/*.js').map(function(item) {
              return item.relative;
            })).deps);
          }
        });

        item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
          var name = item.split('@')[0];
          return ~deps.indexOf(name);
        }));
      } else {
        var main = (item.main || 'index.js').replace(/^\.\//, '').replace(/\/$/, '/index');

        if (!test('-f', path.join(pkgPath, main)) && test('-d', path.join(pkgPath, main))) {
          main = path.join(main, 'index');
        }

        // console.log(item, main)
        // console.log(main);
        startFiles.push(main);
        var ret = collect(pkgPath, startFiles);
        var deps = ret.deps.concat();

        ret.enties.forEach(function(shorpath) {
          if (/^(lib|modules|release)/i.test(shorpath))return;

          item.mapping.push({
            reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(shorpath) + ")$",
            release: '$1'
          });
        });

        if (test('-d', path.join(pkgPath, 'lib'))) {
          item.mapping.push({
            reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/lib\\/(.*)$",
            release: 'lib/$1'
          });

          deps.push.apply(deps, collect(pkgPath, finder(pkgPath, 'lib/**/*.js').map(function(item) {
            return item.relative;
          })).deps);
        }

        if (test('-d', path.join(pkgPath, 'modules'))) {
          item.mapping.push({
            reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/modules\\/(.*)$",
            release: 'modules/$1'
          });

          deps.push.apply(deps, collect(pkgPath, finder(pkgPath, 'modules/**/*.js').map(function(item) {
            return item.relative;
          })).deps);
        }

        if (test('-d', path.join(pkgPath, 'release'))) {
          item.mapping.push({
            reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/release\\/(.*)$",
            release: 'release/$1'
          });

          deps.push.apply(deps, collect(pkgPath, finder(pkgPath, ['release/**/*.js']).map(function(item) {
            return item.relative;
          })).deps);
        }

        item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
          var name = item.split('@')[0];
          return ~deps.indexOf(name);
        }));

        item.main = main;
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
    }

    if (item.dependencies && argv.r !== false) {
      args.push.apply(args, item.dependencies);
    }

    delete item.files;
    delete item.ignoreDIST;
    items.push(item);
  });

  if (!items.length) {
    continue;
  }

  var topConfig = null;
  if (!argv.override && test('-f', path.join(__dirname, '../packages/' + pkgName + '.json'))) {
    console.log('Merging...')
    var pkgs = (function() {
      var pkg = require('../packages/' + pkgName + '.json');
      var pkgs = {};
      var tags = pkg.tags;
      topConfig = pkg;

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
    var config = assign({}, topConfig || items[0]);

    delete config['version'];
    delete config['__hash'];
    config.tags = items.map(function(tag) {
      var clone = assign({}, tag);
      var rest = assign({}, config);

      delete rest.tags;

      Object.keys(tag).forEach(function(key) {
        delete rest[key];

        if (tag[key] && config[key] && deepEqual(tag[key], config[key])) {
          delete clone[key];
        }
      });

      Object.keys(rest).forEach(function(key) {
        clone[key] = null;
      });

      return clone;
    });
    write(path.join(__dirname, "builds", pkgName + '.json'),  JSON.stringify(config, null, 2));
    console.log('Created %s', pkgName + '.json');
    packages.push(pkgName);
  })();
}

function isIgnored(name, version) {
  if (!ignore[name]) {
    return false;
  }

  if (ignore[name] == '*') {
    return true;
  }

  if (!Array.isArray(ignore[name])) {
    ignore[name] = [ignore[name]];
  }

  var satisfied = false;
  ignore[name].every(function(item) {
    if (semver.satisfies(version, item)) {
      satisfied = true;
      return false;
    }
    return true;
  });

  return satisfied;
}


function getOverride(pkgName, version) {
  var configPath = path.join(__dirname, 'override', pkgName + '.json');
  if (test('-f', configPath)) {
    var json = require(configPath);
    var data = assign({}, json);
    delete data.tags;

    if (version && semver.valid(version) && json.tags) {
      Object.keys(json.tags).forEach(function(key) {
        var tag = json.tags[key];

        if (semver.valid(version) && semver.satisfies(version, key)) {
          console.log('Load override %s', key);
          assign(data, tag);
        }
      })
    }

    return data
  }

  return null;
}

function globToReg(pattern, prefix) {
  prefix = prefix || "";

  // 由于minimatch提供的glob支持中()语法不符合fis glob的需求，因此只针对()单独处理
  var hasBracket = ~pattern.indexOf('(');

  // 当用户配置 *.js 这种写法的时候，需要让其命中所有所有目录下面的。
  if (/^(\(*?)(?!\:|\/|\(|\*\*)(.*)$/.test(pattern)) {
    pattern = '**/' + pattern;
  }

  pattern = prefix + pattern;

  // support special global star
  // 保留原来的 **/ 和 /** 用法，只扩展 **.ext 这种用法。
  pattern = pattern.replace(/\*\*(?!\/|$)/g, '\uFFF0gs\uFFF1');
  if (hasBracket) {
    pattern = pattern.replace(/\(/g, '\uFFF0/').replace(/\)/g, '/\uFFF1');
  }

  regex = minimatch.makeRe(pattern, {
    // matchBase: true
  });

  pattern = regex.source;
  pattern = pattern.replace(/\uFFF0gs\uFFF1/g, '(?!\\.)(?=.).*');

  if (hasBracket) {
    pattern = pattern.replace(/\uFFF0\\\//g, '(').replace(/\\\/\uFFF1/g, ')');
  }

  regex = new RegExp(pattern, regex.ignoreCase ? 'i' : '');
  return regex;
}

function reg2str(reg) {
  return reg.source.replace(/\//g, '\\/');
}

function convertFromJspm(json, item, pkgName, pkgPath) {
  var jspm = json.jspm;
  var main = (json.spm && json.spm.main || json.jspm.main || json.main).replace(/^\.\//, '').replace(/\/$/, '/index');
  var pathPrefix = '/node_modules/' + pkgName + '/';

  if (!test('-f', path.join(pkgPath, main))) {
    if (test('-d', path.join(pkgPath, main))) {
      main = path.join(main, 'index');
    } else if (jspm.directories && jspm.directories.lib && test('-f', path.join(pkgPath, jspm.directories.lib, main))) {
      main = path.join(jspm.directories.lib, main);
    }
  }

  if (jspm.ignore) {
    jspm.ignore.forEach(function(filepath) {
      if (test('-d', path.join(pkgPath, filepath))) {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(filepath) + "\\/.*)$",
          release: false
        });
      } else {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(filepath) + "(?:\\.js)?)$",
          release: false
        });
      }
    });
  }

  var startFiles = [
    main
  ];


  if (jspm.files) {
    var folders = [];

    jspm.files.forEach(function(filepath) {
      if (test('-d', path.join(pkgPath, filepath))) {
        folders.push(filepath.replace(/^\.\//, ''));
      } else if (/\.js$/.test(filepath)) {
        startFiles.push(filepath);
      } else {
        item.mapping.push({
          reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(filepath) + ")$",
          release: '$1'
        });
      }
    });
  }

  if (jspm.map) {
    Object.keys(jspm.map).forEach(function(key) {
      var value = jspm.map[key];
      if (/^[^\.\/]+/.test(key)) {
        item.shim = item.shim || {};
        if (!item.shim['**/*.js']) {
          item.shim['**/*.js'] = {
            replace: []
          };
        }

        item.shim['**/*.js'].replace.push(
          {
            from: '/\\brequire\\s*\\(\\s*(\'|")' + escapeReg(key) + '\\b/ig',
            to: 'require($1' + value
          }
        );
        delete jspm.map[key];
      }

      startFiles.push(value);
    });

    item.paths = jspm.map;
  }

  if (jspm.shim) {
    var shim = {};

    Object.keys(jspm.shim).forEach(function(key) {
      var value = jspm.shim[key];

      if (/\.js$/.test(key)) {
        key += '.js';
      }

      shim[key] = value;
    });
    item.shim = shim;
  }

  var ret = collect(pkgPath, startFiles);
  var deps = ret.deps.concat();
  var rFolder = folders && folders.length ? new RegExp("^(" + folders.map(escapeReg).join('|') + ")", 'i') : null;

  ret.enties.forEach(function(shorpath) {
    if (rFolder && rFolder.test(shorpath))return;

    item.mapping.push({
      reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/(" + escapeReg(shorpath) + ")$",
      release: '$1'
    });
  });

  folders && folders.forEach(function(folder) {
    if (test('-d', path.join(pkgPath, folder))) {
      folder = folder.replace(/\//, '');
      item.mapping.push({
        reg: "^\\/node_modules\\/" + escapeReg(item.name) + "\\/" + escapeReg(folder) + "\\/(.*)$",
        release: folder + '/$1'
      });

      deps.push.apply(deps, collect(pkgPath, finder(pkgPath, folder + '/**/*.js').map(function(item) {
        return item.relative;
      })).deps);
    }
  });

  item.dependencies && (item.dependencies = item.dependencies.filter(function(item) {
    var name = item.split('@')[0];
    return ~deps.indexOf(name);
  }));

  item.main = main;
}
