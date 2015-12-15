'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.1.1',
            tag: 'master',
            name: 'lodash.debounce',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.debounce@3.1.1',
            dependencies: [
                "lodash._getnative@^3.0.0"
            ],
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.debounce\/index\.js$/,
                    release: 'index.js'
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
