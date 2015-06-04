'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jiexuangao/rosetta.git',
        version: '1.0.0',
        main: 'Rosetta.js',
        tag: 'master',
        mapping: [
            {
                reg: /^\/dist\/(.css|js)$/,
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