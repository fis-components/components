var ARGV = process.argv;
var ROOT = __dirname;

var path = require('path');
var fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;
var util = require('util');

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

    return list;
}

function createRepos(repos, token, from) {

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
    }, function (err, data) {
        if (err) {
            //throw err;
            process.exit(1);
        }
        process.exit(0);
    });

    delete github;
}

function lastChangFiles(cb) {
    var git_diff = spawn('git', ['diff', '--name-status', 'HEAD^..HEAD']);
    git_diff.stderr.pipe(process.stderr);

    var o = '';
    git_diff.stdout.on('data', function (c) {
        o += c.toString();
    });

    git_diff.stdout.on('end', function () {

        var arr = o.split('\n');
        arr = arr
            .filter(function (line) {
                var parts = line.split(/\s+/);

                if (!line || parts[0] === 'D') {
                    return false;
                }

                if (parts[1].indexOf('modules') == -1) {
                    return false;
                }
                return /\.js$/.test(parts[1]);
            })
            .map(function(line) {
                return line.split(/\s+/)[1];
            });

        // 如果没有 modules 更新。则读取 commint message 指令。
        if (!arr.length) {
            var git_log = spawn('git', ['log', '-1', '--pretty=%B']);
            git_log.stderr.pipe(process.stderr);

            var message = '';
            git_log.stdout.on('data', function (c) {
                message += c.toString();
            });

            git_log.stdout.on('end', function () {
                var m = /^(update|forceupdate)\s+(.*)/.exec(message);
                var finder = require('./finder.js');
                var files;
                var force = false;

                if (m) {
                    files = m[2].split(/\s+/);
                    force = m[1] === "forceupdate";
                }

                if (files && files.length) {
                    files = finder(__dirname, files)
                        .map(function(i) {
                            return i.relative;
                        })
                        .filter(function(p) {
                            if (p.indexOf('modules') == -1) {
                                return false;
                            }
                            return /\.js$/.test(p);
                        });

                    if (files.length) {
                        cb(files, force);
                    }
                }
            });
            return;
        }

        //cb(['modules/jquery.js']);
        cb(arr, true);
    });
}

function dumpMapping (mapping) {
    var string = '[\n';
    mapping.forEach(function (map) {
        string += '    {\n';
        string += '        reg: ' + map.reg + ',\n';
        string += '        release:' + map.release + '\n';
        string += '    },\n';
    });
    string += '];';
    return string;
}

if (ARGV[2] == 'sync') {

    var sync = function (arr, rebuild) {
        arr.forEach(function (name) {
            var list = loadConfig(path.join(ROOT, name));
            name = name.replace('modules/', '')
                       .replace(/\.js$/, '');
            var queue = [];
            list.forEach(function (r) {
                queue.push(function (cb) {
                    var h = spawn('bash', [
                        path.join(ROOT, 'build.sh'),
                        name,
                        r.repos,
                        r.build || '',
                        r.version,
                        r.build_dest || '',
                        r.tag || r.version,
                        rebuild ? 'true' : 'false'
                    ], {
                        cwd: __dirname
                    });
                    h.stdout.on('end', function () {
                        cb();
                    });
                    h.stdout.pipe(process.stdout);
                    h.stderr.pipe(process.stderr);
                });
            });
            async.series(queue, function () {
                console.log('done');
            });
        });
    };

    if (ARGV.length > 3) {
        var files = ARGV.slice(3);
        var finder = require('./finder.js');

        files = finder(__dirname, files)
            .map(function(i) {
                return i.relative;
            })
            .filter(function(p) {
                if (p.indexOf('modules') == -1) {
                    return false;
                }
                return /\.js$/.test(p);
            });

        if (files.length) {
            sync(files, true);
        }


    } else {
        lastChangFiles(sync);
    }
} else if (ARGV[2] == 'create-repos') {
    console.log('=sync.js create repos: https://github.com/fis-components/%s', ARGV[3]);
    createRepos(ARGV[3], ARGV[4], ARGV[5]);
} else if (ARGV[2] == 'create-component.json') {
    var name = ARGV[3].trim();
    var version = ARGV[4].trim();
    try {
        var list = loadConfig(path.join(ROOT, 'modules', name + '.js'));
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

                    dependencies[parts[0]] = parts[1];
                });

                r.dependencies = dependencies;
            }

            fs.writeFileSync(
                path.join(ROOT, '_' + name, 'component.json'),
                JSON.stringify(r, null,'    ')
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
    try {
        var list = loadConfig(path.join(ROOT, 'modules', name + '.js'));
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

    var convert = require('./convert.js');
    var finder = require('./finder.js');

    var list = loadConfig(path.join(ROOT, 'modules', name + '.js'));

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

