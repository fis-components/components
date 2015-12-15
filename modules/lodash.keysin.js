'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.0.8',
            tag: 'master',
            name: 'lodash.keysin',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.keysin@3.0.8',
            dependencies: [
                "lodash.isarray@^3.0.0",
                "lodash.isarguments@^3.0.0"
            ],
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.keysin\/index\.js$/,
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
