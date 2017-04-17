'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/fcomb/redux-logger.git',
            version: 'v2.3.1',
            name: 'redux-logger',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . redux-logger@2.3.1',
            dependencies: [
                "redux"
            ],
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-logger\/lib\/(.*)$/,
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
        }
    ]
})();
