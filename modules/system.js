'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/systemjs/systemjs.git',
        version: '0.19.6',
        description: 'Universal dynamic module loader',
        name: 'system',
        main: 'system.js',
        mapping: [
            {
                reg: /^\/dist\/(.*)\.src\.js$/,
                release: '$1.js'
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
