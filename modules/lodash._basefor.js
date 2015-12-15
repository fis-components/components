'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.0.2',
            tag: 'master',
            name: 'lodash._basefor',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash._basefor@3.0.2',
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\._basefor\/index\.js$/,
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
