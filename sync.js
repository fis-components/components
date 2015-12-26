var ARGV = process.argv;
var ROOT = __dirname;

var path = require('path');
var fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;
var util = require('util');
var hash = require('object-hash');
var assign = require('object-assign');

function mixin(a, b) {
    if (a && b) {
        for (var key in b) {
            a[key] = b[key];
        }
    }
    return a;
}

function loadConfig(path) {
    var list = require(path);
    var map = {};

    if (Array.isArray(list)) {
        list.forEach(function(item) {
            map[item.version] = item;

            if (item.extend) {
                if (!map[item.extend]) {
                    throw new Error('Extend `'+item.extend+'` is not defined.');
                }
                var copySelf = mixin({}, item)
                mixin(item, map[item.extend]);
                mixin(item, copySelf);
                delete item.extend;
            }
        });    
    } else {
        var pkg = list;
        list = [];
        var tags = pkg.tags;

        tags.forEach(function(tag) {
            var data = assign({}, pkg, tag);
            delete data.tags;
            delete data.__hash;
            var hashvalue = hash(data);

            if (hashvalue === tag.__hash) {
                return;
            }

            if (data.mapping) {
                data.mapping = data.mapping.map(function(subitem) {
                    var clone = assign({}, subitem);
                    var reg = new RegExp(subitem.reg, "i");
                    clone.reg = reg;
                    return clone;
                });
            }

            list.push(data);
        });
    }

    return list;
}


function createRepos(repos, token, from, folder) {

    if (!token) {
        process.stderr.write('ERROR, must given token of GITHUB!\n');
        process.exit(1);
    }

    var GithubAPI = require('github');

    var github = new GithubAPI({
        version: '3.0.0'
    });

    github.authenticate({
        type: "token",
        token: token
    });

    github.repos.createFromOrg({
        name: repos,
        org: 'fis-components',
        description: 'Fork from ' + from
    }, function(err, data) {
        if (err) {
            //throw err;
            process.exit(1);
        }
        process.exit(0);
    });

    delete github;
}

function getLastMessage(cb) {
    var git_log = spawn('git', ['log', '-1', '--pretty=%B']);

    git_log.stderr.pipe(process.stderr);

    var message = '';
    git_log.stdout.on('data', function(c) {
        message += c.toString();
    });

    git_log.stdout.on('end', function() {
        cb(message);
    });
}

function getFilesFromLastMessage(cb) {
    getLastMessage(function(message) {
        var m = /^(update|forceupdate)\s+(.*)/.exec(message);
        var finder = require('./finder.js');
        var files;
        var force = false;

        console.log('Last Message: %s', message);

        if (m) {
            files = m[2].split(/\s+/);
            force = m[1] === "forceupdate";
        } else if (~message.indexOf('bos sync')) {

            // 更新所有 bos
            // files = finder(__dirname, 'modules/**/*.js')
            //     .map(function(i) {
            //         return i.relative;
            //     })
            //     .filter(function(p) {
            //         if (p.indexOf('modules') == -1) {
            //             return false;
            //         }
            //         return /\.js$/.test(p);
            //     });

            // var queue = [];

            // files.forEach(function(file) {
            //     var list = loadConfig('./' + file);
            //     var name = file.replace('modules/', '')
            //         .replace(/\.js$/, '');

            //     list.forEach(function(r) {
            //         queue.push(function(cb) {
            //             var h = spawn('bash', [
            //                 path.join(ROOT, 'bosSync.sh'),
            //                 name || r.name,
            //                 r.version
            //             ], {
            //                 cwd: __dirname
            //             });
            //             h.on('exit', function(code) {
            //                 if (code) {
            //                     process.exit(1);
            //                 }
            //                 cb();
            //             });
            //             h.stdout.pipe(process.stdout);
            //             h.stderr.pipe(process.stderr);
            //         });
            //     });
            // });

            // console.log('Start BOS Sync...');
            // async.series(queue, function() {
            //     console.log('done');
            // });

            // return;
        }

        if (files && files.length) {
            files = finder(__dirname, files)
                .map(function(i) {
                    return i.relative;
                })
                .filter(function(p) {
                    if (p.indexOf('modules') == -1 && p.indexOf("packages") == -1) {
                        return false;
                    }
                    return /\.js(?:on)?$/.test(p);
                });

            if (files.length) {
                cb(files, force);
            }
        }
    });
}

function lastChangFiles(cb) {
    var lastSuccessMessageId = 'HEAD^';
    var remote = 'https://raw.githubusercontent.com/fis-components/components/history/commitId.log';
    
    console.log('Fetching ' + remote);

    var curl = spawn('curl', [remote]);
    var body = '';
    curl.stderr.pipe(process.stderr);
    // curl.stdout.pipe(process.stdout);
    curl.stdout.on('data', function(c) {
        body += c.toString();
    });
    curl.stdout.on('end', function() {
        if (!/Not Found/i.test(body)) {
            lastSuccessMessageId = body.trim();
        }
        fn();
    });

    function fn() {
        var git_diff = spawn('git', ['diff', '--name-status', lastSuccessMessageId + '..HEAD']);
        git_diff.stderr.pipe(process.stderr);

        var o = '';
        git_diff.stdout.on('data', function(c) {
            o += c.toString();
        });

        git_diff.stdout.on('end', function() {
            var arr = o.split('\n');
            arr = arr
                .filter(function(line) {
                    var parts = line.split(/\s+/);

                    if (!line || parts[0] === 'D') {
                        return false;
                    }

                    if (parts[1].indexOf('modules') == -1 && parts[1].indexOf("packages") == -1) {
                        return false;
                    }
                    return /\.js(?:on)?$/.test(parts[1]);
                })
                .map(function(line) {
                    return line.split(/\s+/)[1];
                });

            // 如果没有 modules 更新。则读取 commint message 指令。
            if (!arr.length) {
                console.log('Nothing changed.')
                return getFilesFromLastMessage(cb);
            }

            getLastMessage(function(message) {
                //cb(['modules/jquery.js']);
                cb(arr, !/softupdate/i.test(message), function(cb) {
                    // 保存最后一次处理的 git message id.
                    var child = spawn('bash', [path.join(ROOT, 'storeStatus.sh')], {
                        cwd: __dirname
                    });

                    child.on('exit', function(code) {
                        if (code) {
                            process.exit(1);
                        }
                        cb();
                    });
                    child.stdout.pipe(process.stdout);
                    child.stderr.pipe(process.stderr);
                });
            })
        });
    }
}

function dumpMapping(mapping) {
    var string = '[\n';
    mapping.forEach(function(map) {
        string += '    {\n';
        string += '        reg: ' + map.reg + ',\n';
        string += '        release:' + map.release + '\n';
        string += '    },\n';
    });
    string += '];';
    return string;
}

if (ARGV[2] == 'sync') {

    var sync = function(arr, rebuild, callback) {
        var queue = [];
        arr.forEach(function(name) {
            var list = loadConfig(path.join(ROOT, name));
            var isFromJson = /\.json$/.test(name);
            name = name.replace(/(?:modules|packages)\//, '')
                .replace(/\.js(?:on)?$/, '');
            var basename = path.basename(name);

            list.forEach(function(r) {
                queue.push(function(cb) {
                    var h = spawn('bash', [
                        path.join(ROOT, 'build.sh'),
                        basename,
                        r.repos,
                        r.build || '',
                        r.version,
                        r.build_dest || '',
                        r.tag || r.version,
                        rebuild ? 'true' : 'false',
                        name.substring(0, name.length - basename.length),
                        isFromJson ? 'true' : 'false'
                    ], {
                        cwd: __dirname
                    });
                    // h.stdout.on('end', function() {
                    //     cb();
                    // });
                    h.on('exit', function(code) {
                        if (code) {
                            process.exit(1);
                        }
                        cb();
                    });
                    h.stdout.pipe(process.stdout);
                    h.stderr.pipe(process.stderr);
                });
            });
        });

        queue.push(function(cb) {
            callback ? callback(cb) : cb();
        });
        async.series(queue, function() {
            console.log('done');
        });
    };

    // 直接从 argv 里面读取。
    if (ARGV.length > 3) {
        console.log('Sync with args...')
        var files = ARGV.slice(3);
        var finder = require('./finder.js');

        files = finder(__dirname, files)
            .map(function(i) {
                return i.relative;
            })
            .filter(function(p) {
                if (p.indexOf('modules') == -1 && p.indexOf("packages") == -1) {
                    return false;
                }
                return /\.js(?:on)?$/.test(p);
            });

        if (files.length) {
            sync(files, true);
        }
    } else {
        lastChangFiles(sync);
    }
} else if (ARGV[2] == 'create-repos') {
    console.log('=sync.js create repos: https://github.com/fis-components/%s', ARGV[3]);
    createRepos(ARGV[3], ARGV[4], ARGV[5], ARGV[6]);
} else if (ARGV[2] == 'create-component.json') {
    var name = ARGV[3].trim();
    var version = ARGV[4].trim();
    var folder = (ARGV[5] || '').trim();
    var isFromJson = (ARGV[6] || '').trim() === "true";
    
    try {
        var list = loadConfig(
                isFromJson ? 
                path.join(ROOT, 'packages', folder + name + '.json'):
                path.join(ROOT, 'modules', folder + name + '.js')
            );
        for (var i = 0; i < list.length; i++) {
            var r = list[i];

            if (r.version != version) {
                continue;
            }

            r.name = name;
            // fs.writeFileSync(
            //     path.join(ROOT, '_' + name, '__mapping.js'),
            //     'module.exports=' + dumpMapping(r.mapping)
            // );
            //r.mapping = './__mapping.js';
            delete r.mapping; //@TODO
            delete r.build;
            delete r.shim;

            // normalize dependencies for better compatibility.
            if (r.dependencies && Array.isArray(r.dependencies)) {
                var dependencies = {};

                r.dependencies.forEach(function(item) {
                    var parts = item.split('@');

                    dependencies[parts[0]] = parts[1] || '*';
                });

                r.dependencies = dependencies;
            }

            // console.log('Write to %s with data:\n%s', path.join(ROOT, '_' + name, 'component.json'), JSON.stringify(r, null, 2));
            fs.writeFileSync(
                path.join(ROOT, '_' + name, 'component.json'),
                JSON.stringify(r, null, '    ')
            );
            break;
        }

    } catch (e) {
        throw e;
        //process.exit(1);
    }
    process.exit(0);
} else if (ARGV[2] == 'move') {
    var name = ARGV[3].trim();
    var version = ARGV[4].trim();
    var from = ARGV[5].trim();
    var to = ARGV[6].trim();
    var folder = (ARGV[7] || '').trim();
    var isFromJson = (ARGV[8] || '').trim() === "true";
    try {
        console.log("load config from %s", folder + name + (isFromJson ? '.js' : '.json') );
        // var list = loadConfig(path.join(ROOT, 'modules', folder + name + '.js'));
        var list = loadConfig(
                isFromJson ? 
                path.join(ROOT, 'packages', folder + name + '.json'):
                path.join(ROOT, 'modules', folder + name + '.js')
            );
        for (var i = 0; i < list.length; i++) {
            var r = list[i];

            if (r.version != version) {
                continue;
            }

            var Scaffold = require('fis-scaffold-kernel');
            var scaffold = new Scaffold({
                log: {
                    //level: 0
                }
            });

            r.mapping.unshift({
                reg: /\.git\/.*/i,
                release: false
            }, {
                reg: /^\/component\.json$/i,
                release: '$0'
            });

            var ok = scaffold.deliver(from, to, r.mapping);
            if (ok == 0) {
                process.exit(1); //fail
            }
        }
    } catch (e) {
        throw e;
        process.exit(1);
    }
    process.exit(0);
} else if (ARGV[2] == 'convert') {
    var name = ARGV[3].trim();
    var version = ARGV[4].trim();
    var dist = ARGV[5].trim();
    var folder = (ARGV[6] || '').trim();
    var isFromJson = (ARGV[7] || '').trim() === "true";

    var convert = require('./convert.js');
    var finder = require('./finder.js');

    var list = loadConfig(
        isFromJson ? 
        path.join(ROOT, 'packages', folder + name + '.json'):
        path.join(ROOT, 'modules', folder + name + '.js'));

    for (var i = 0; i < list.length; i++) {
        var r = list[i];

        if (r.version != version) {
            continue;
        }

        var jses = finder(dist, '**/*.js');

        convert({
            files: jses,
            convertAsync: false,
            config: r,
            dir: dist
        }, function() {
            console.log('convert done')
        });
    }
}
