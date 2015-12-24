module.exports = (function () {
    'use strict';
    return [{
        repos: 'https://github.com/ramda/ramda.git',
        version: 'master',
        main: 'ramda.js',
        mapping: [{
            reg: /\/dist\/ramda\.js$/,
            release: 'ramda.js'
        }, {
            reg: /README\.md$/,
            release: 'README.md'
        }, {
            reg: '*',
            release: false
        }]
    }];
}());
