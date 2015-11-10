'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/react-redux.git',
            version: 'v4.0.0',
            name: 'react-redux',
            main: 'react-redux.js',
            build: 'rm package.json && npm install --prefix . react-redux@0.14.2',
            dependencies: [
                "react@^0.14.0",
                "redux"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react\-redux\/dist\/(.*)$/,
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
