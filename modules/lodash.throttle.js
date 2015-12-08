'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.0.4',
            tag: '3.0.4-npm',
            name: 'lodash.throttle',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.throttle@3.0.4',
            dependencies: [
                "lodash.debounce@^3.0.0"
            ],
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.throttle\/index\.js$/,
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
