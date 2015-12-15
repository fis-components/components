'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/mzabriskie/axios.git',
            version: 'v0.7.0',
            name: 'axios',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . axios@0.7.0',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/axios\/lib\/(.*)$/,
                    release: 'lib/$1'
                },
                {
                    reg: /^\/index\.js$/i,
                    release: '$&'
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
