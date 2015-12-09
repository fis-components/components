'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.0.4',
            tag: 'master',
            name: 'lodash.isarray',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.isarray@3.0.4',
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.isarray\/index\.js$/,
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
