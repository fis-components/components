var TOKEN = process.argv[2];

if (!TOKEN) {
    process.stderr.write('ERROR, must given token of GITHUB!\n');
    return;
}

var GithubAPI = require('github');

var github = new GithubAPI({
    version: '3.0.0'
});

github.authenticate({
    type: "token",
    token: TOKEN
});

github.repos.createFromOrg({
    name: 'test',
    org: 'fis-components'
}, function (err, data) {
    if (err) {
        throw err;
        return;
    }
    process.exit(0);
});