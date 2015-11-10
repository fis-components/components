'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/facebook/react.git',
            version: 'v0.13.3',
            name: 'react',
            main: 'react.js',
            build: 'rm package.json && npm install --prefix . react@0.13.3',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react\/dist\/(.*)$/,
                    release: '$1'
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
        },

        {
            extend: 'v0.13.3',
            version: 'v0.14.2',
            build: 'rm package.json && npm install --prefix . react@0.14.2',
        }
    ]
})();
