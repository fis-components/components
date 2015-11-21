'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/history.git',
            version: 'v1.13.1',
            name: 'history',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . history@1.13.1',
            dependencies: [
                "qs@^4.0.0",
                "invariant@^2.0.0",
                "warning@^2.0.0",
                "deep-equal@^1.0.0"
            ],
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/history\/lib\/(.*)$/,
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
