var ARGV = process.argv;
var ROOT = __dirname;

var path = require('path');


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

function listAll() {
    var fs = require('fs');
    var files = fs.readdirSync(ROOT);
    return files.filter(function (name) {
        return /\.js$/.test(name) && name != 'sync.js';
    });
}


if (ARGV[2] == 'sync') {
    var all = listAll();
    all.forEach(function (name) {
        var r = require(path.join(ROOT, name));
        var spawn = require('child_process').spawn;
        var h = spawn('bash', 
            [
                path.join(ROOT, 'build.sh'), 
                name.replace(/\.js/, ''), 
                r.repos, 
                r.build, 
                r.version
            ], {
                cwd: __dirname
            });
        h.stderr.pipe(process.stderr);
        h.stdout.pipe(process.stdout);
    });
} else if (ARGV[2] == 'create-repos') {
    console.log('=sync.js create repos: https://github.com/fis-components/%s', ARGV[3]);
    createRepos(ARGV[3], ARGV[4], ARGV[5]);
} else if (ARGV[2] == 'create-component.json') {
    var name = ARGV[3];
    try {
        var r = require(path.join(ROOT, name + '.js'));
        r.name = name;
        var fs = require('fs');
        fs.writeFileSync(path.join(ROOT, name, '__maping.js'), 'module.exports=' + JSON.stringify(r.maping, null, ' '));
        r.maping = './__maping.js';
        fs.writeFileSync(path.join(ROOT, name, 'component.json'), JSON.stringify(r,null,' '), {
            flag: 'w'
        });
    } catch (e) {
        throw e;
        //process.exit(1);
    }
    process.exit(0);
}

