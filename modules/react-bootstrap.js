'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/react-bootstrap/react-bootstrap.git',
            version: 'v0.27.3',
            name: 'react-bootstrap',
            main: 'react-bootstrap.js',
            build: 'rm package.json && npm install --prefix . react-bootstrap@0.27.3',
            dependencies: [
                "react@^0.14.0",
                "react-dom@^0.14.0"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react-bootstrap\/dist\/(.*)$/,
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