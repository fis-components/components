'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jiexuangao/rosetta.git',
        version: '1.0.1',
        main: 'Rosetta.js',
        tag: 'v1.0.1',
        mapping: [
            {
                reg: /^\/dist\/((Rosetta|Rosetta-ie)\.(css|js))$/ig,
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