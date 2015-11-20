'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/history.git',
            version: 'v1.13.1',
            name: 'history',
            main: 'history.js',
            build: 'rm package.json && npm install --prefix . history@1.13.1',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/history\/umd\/(History\.js)$/,
                    release: 'history.js'
                },
                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();
