'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/bryaneaton13/react-pull-to-refresh.git',
            version: 'v1.0.2',
            name: 'react-pull-to-refresh',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . react-pull-to-refresh@1.0.2',
            dependencies: [
                "hammerjs@^2.0.4"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react-pull-to-refresh\/lib\/(.*)$/,
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
