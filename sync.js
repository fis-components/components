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
        version: '3.0.0',
        description: 'from ' + from
    });

    github.authenticate({
        type: "token",
        token: token
    });

    github.repos.createFromOrg({
        name: repos,
        org: 'fis-components'
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


if (ARGV[2] == 'list') {
    var all = listAll();

    all.forEach(function (name) {
        try {
            var r = require(path.join(ROOT, name));
            console.log('%s----%s----%s----%s', name.replace('.js', ''), r.repos, r.build, r.version);
        } catch (e) {}
    });

} else if (ARGV[2] == 'create-repos') {
    console.log('=sync.js create repos: https://github.com/fis-components/%s', ARGV[3]);
    createRepos(ARGV[3], ARGV[4]);
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

