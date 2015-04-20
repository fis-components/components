var finder = require('./finder.js');
var ROOT = __dirname;
var path = require('path');
var fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;
var util = require('util');
var argv = process.argv;

if (argv.length < 3) {
    console.log('Please specify modules to be tested.\nFor example: `node test.js "modules/jquery-*.js"`');
    process.exit(1);
}

var files = argv.slice(2);

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

files.forEach(function(name) {
    var list = require(path.join(ROOT, name));
    name = name.replace('modules/', '')
        .replace(/\.js$/, '');
    var queue = [];
    list.forEach(function(r) {
        queue.push(function(cb) {
            var h = spawn('bash', [
                path.join(ROOT, 'test.sh'),
                name,
                r.repos,
                r.build || '',
                r.version,
                r.build_dest || '',
                r.tag || r.version
            ], {
                cwd: __dirname
            });
            h.stdout.on('end', function() {
                cb();
            });
            h.stdout.pipe(process.stdout);
            h.stderr.pipe(process.stderr);
        });
    });
    async.series(queue, function() {
        console.log('done');
    });
});
