'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/components/es6-promise',
        version: 'v2.0.1',
        description: 'An es6-promise JavaScript polyfill.',
        name: 'es6-promise',
        main: 'promise.js',
        mapping: [
            {
                reg: /^\/promise\.js$/,
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
        ]
    }]
})();
