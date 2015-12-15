'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/redux-router.git',
            version: 'v1.0.0-beta4',
            name: 'redux-router',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . redux-router@1.0.0-beta4',
            dependencies: [
                "redux",
                "deep-equal"
            ],

            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-router\/lib\/(.*)$/,
                    release: 'lib/$1'
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
        }, {
            version: 'v1.0.0-beta5',
            extend: 'v1.0.0-beta4',
            build: 'rm package.json && npm install --prefix . redux-router@1.0.0-beta5'
        }
    ]
})();
