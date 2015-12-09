'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.0.4',
            tag: 'master',
            name: 'lodash.isarguments',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.isarguments@3.0.4',
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.isarguments\/index\.js$/,
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
