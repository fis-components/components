var finder = require('./finder.js');
var ROOT = __dirname;
var path = require('path');
var fs = require('fs');
var async = require('async');
var spawn = require('child_process').spawn;
var util = require('util');
var argv = process.argv;
var hash = require('object-hash');
var assign = require('object-assign');

if (argv.length < 3) {
    console.log('Please specify modules to be tested.\nFor example: `node test.js "modules/jquery-*.js"`');
    process.exit(1);
}

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


var files = argv.slice(2);
files = finder(__dirname, files)
    .map(function(i) {
        return i.relative;
    })
    .filter(function(p) {
        if (p.indexOf('modules') == -1 && p.indexOf('packages') == -1) {
            return false;
        }
        return /\.js(?:on)?$/.test(p);
    });

files.forEach(function(name) {
    var list = loadConfig(path.join(ROOT, name));
    var isFromJson = /\.json$/.test(name);
    name = name.replace(/(?:modules|packages)\//, '')
        .replace(/\.js(?:on)?$/, '');
    var basename = path.basename(name);
    var queue = [];

    list.forEach(function(r) {
        // console.log(r.mapping);process.exit(1);
        queue.push(function(cb) {
            var h = spawn('bash', [
                path.join(ROOT, 'test.sh'),
                basename,
                r.repos,
                r.build || '',
                r.version,
                r.build_dest || '',
                r.tag || r.version,
                name.substr(0, name.length - basename.length),
                isFromJson ? 'true' : false
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
