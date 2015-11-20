'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/redux-router.git',
            version: 'v1.0.0-beta4',
            name: 'redux-router',
            main: 'ReactRouter.js',
            build: 'rm package.json && npm install --prefix . redux-router@1.0.0-beta4',
            dependencies: [
                "redux"
            ],
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-router\/umd\/(ReactRouter\.js)$/,
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
