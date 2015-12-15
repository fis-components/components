'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/acdlite/redux-actions.git',
            version: '0.8.0',
            tag: 'master',
            name: 'redux-actions',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . redux-actions@0.8.0',
            dependencies: [
                "flux-standard-action@^0.6.0",
                "reduce-reducers@^0.1.0"
            ],
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-actions\/lib\/(.*)$/,
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
