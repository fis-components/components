module.exports = (function () {
    'use strict';
    return [{
        repos: 'https://github.com/ramda/ramda',
        version: 'v0.18.0',
        main: 'ramda.js',
        mapping: [{
            reg: /\/dist\/ramda\.min\.js$/,
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
