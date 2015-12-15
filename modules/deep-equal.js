'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/substack/node-deep-equal.git',
            version: '1.0.1',
            name: 'deep-equal',
            main: 'index.js',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/index\.js$/,
                    release: '$0'
                },
                {
                    reg: /^\/lib\/.*\.js$/,
                    release: '$0'
                },
                {
                    reg: /^\/readme\.markdown$/i,
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
