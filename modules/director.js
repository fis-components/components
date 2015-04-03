'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/flatiron/director',
        version: 'v1.2.8',
        description: 'A client Side/Server Side Router',
        name: 'director',
        main: 'director.js',
        mapping: [
            {
                reg: /^\/build\/(director\.js)/,
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
    }]
})();
