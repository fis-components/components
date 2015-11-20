'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/react-router.git',
            version: 'v1.0.0',
            name: 'react-router',
            main: 'react-redux.js',
            build: 'rm package.json && npm install --prefix . react-router@1.0.0',
            dependencies: [
                "invariant@^2.0.0",
                "warning@^2.0.0"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react\-router\/lib\/(.*)$/,
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
