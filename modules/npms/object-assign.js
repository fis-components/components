'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/sindresorhus/object-assign.git',
            version: '4.0.1',
            tag: 'master',
            name: 'object-assign',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . object-assign@4.0.1',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/object\-assign\/(.*\.js)$/,
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
        }
    ]
})();
