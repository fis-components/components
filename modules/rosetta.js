'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jiexuangao/rosetta.git',
        version: '1.0.0',
        main: 'index.js',
        tag: 'master',
        mapping: [
            {
                reg: /^\/lib\/(.*\.js)$/,
                release: '/lib/$1'
            },

            {
                reg: /^\/(index|index-ie)\.js$/,
                release: '$&'
            },

            {
                reg: /^\/dist\/(.css)$/,
                release: '$1'
            },

            {
                reg: /^\/README\.md$/,
                release: '$&'
            },

            {
                reg: '*',
                release: false
            }
        ]
    }];
})();