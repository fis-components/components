'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/madrobby/keymaster',
        version: 'v1.6.3',
        description: 'A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.',
        name: 'keymaster',
        main: 'keymaster.js',
        mapping: [
            {
                reg: /^\/keymaster\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.markdown$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
