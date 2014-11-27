var ARGV = process.argv;
var ROOT = __dirname;

var path = require('path');
var fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;
var util = require('util');

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
        description: 'from ' + from
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
    var git_diff = spawn('git', ['diff', '--name-only', 'HEAD^..HEAD']);
    git_diff.stderr.pipe(process.stderr);

    var o = '';
    git_diff.stdout.on('data', function (c) {
        o += c.toString();
    });

    git_diff.stdout.on('end', function () {
        var arr = o.split('\n');
        arr = arr.filter(function (p) {
            if (p.indexOf('modules') == -1) {
                return false;
            }
            return /\.js$/.test(p);
        });
        //cb(['modules/jquery.js']);
        cb(arr);
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
    lastChangFiles(function (arr) {
        arr.forEach(function (name) {
            var list = require(path.join(ROOT, name));
            name = name.replace('modules/', '')
                       .replace(/\.js$/, '');    
            var queue = [];
            list.forEach(function (r) {
                queue.push(function (cb) { 
                    var h = spawn('bash', [
                        path.join(ROOT, 'build.sh'), 
                        name,
                        r.repos,
                        r.build,
                        r.version,
                        r.build_dest || ''
                    ], {
                        cwd: __dirname
                    });
                    h.stdout.on('data', function (c) {
                        console.log(c.toString());
                    });
                    h.stdout.on('end', function () {
                        cb();
                    });
                    h.stderr.pipe(process.stderr);
                });
            });
            async.series(queue, function () {
                console.log('done');
            });
        });
    });
} else if (ARGV[2] == 'create-repos') {
    console.log('=sync.js create repos: https://github.com/fis-components/%s', ARGV[3]);
    createRepos(ARGV[3], ARGV[4], ARGV[5]);
} else if (ARGV[2] == 'create-component.json') {
    var name = ARGV[3].trim();
    var version = ARGV[4].trim();
    try {
        var list = require(path.join(ROOT, 'modules', name + '.js'));
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
            delete build;
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
        var list = require(path.join(ROOT, 'modules', name + '.js'));
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
            scaffold.deliver(from, to, r.mapping);
        }
    } catch (e) {
        throw e;
        process.exit(1);
    }
    process.exit(0);
}

