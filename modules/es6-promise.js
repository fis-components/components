'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/components/es6-promise',
        version: 'v2.0.1',
        description: 'An es6-promise JavaScript polyfill.',
        name: 'es6-promise',
        main: 'es6-promise.js',
        mapping: [
            {
                reg: /^\/promise\.js$/,
                release: 'es6-promise.js'
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
    },{
        repos: 'https://github.com/components/es6-promise',
        version: 'v3.1.2',
        description: 'An es6-promise JavaScript polyfill.',
        name: 'es6-promise',
        main: 'es6-promise.js',
        mapping: [
            {
                reg: /^\/es6-promise\.js$/,
                release: 'es6-promise.js'
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
