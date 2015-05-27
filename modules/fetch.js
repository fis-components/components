'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/github/fetch',
        version: 'v0.8.2',
        description: 'A window.fetch JavaScript polyfill.',
        name: 'fetch',
        main: 'fetch.js',
        mapping: [
            {
                reg: /^\/fetch\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "fetch.js": {
              "exports": "window.fetch", 
              "deps": ["es6-promise"]
            }
        },
        dependencies: [
            "es6-promise"
        ]
    }, {
        repos: 'https://github.com/github/fetch',
        version: 'v0.7.0',
        description: 'A window.fetch JavaScript polyfill.',
        name: 'fetch',
        main: 'fetch.js',
        mapping: [
            {
                reg: /^\/fetch\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "fetch.js": {
              "exports": "window.fetch", 
              "deps": ["es6-promise"]
            }
        },
        dependencies: [
            "es6-promise"
        ]
    }]
})();
