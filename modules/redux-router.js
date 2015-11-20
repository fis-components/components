'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/redux-router.git',
            version: 'v1.0.0-beta4',
            name: 'redux-router',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . redux-router@1.0.0-beta4',
            dependencies: [
                "redux",
                "deep-equal"
            ],
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-router\/lib\/(.*)$/,
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
