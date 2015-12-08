'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/facebook/react.git',
            version: 'v0.14.3',
            name: 'react-addons-create-fragment',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . react-addons-create-fragment@0.14.3',
            dependencies: [
                "react@^0.14.3"
            ],
            
            mapping: [
                {
                    reg: /^\/node_modules\/react\-addons\-create\-fragment\/index\.js$/,
                    release: 'index.js'
                },

                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ],

            shim: {
                'index.js': {
                    content: [
                        "module.exports = require('react').addons.createFragment;"
                    ].join('\n')
                }
            }
        },

        {
            version: 'v0.14.2',
            extend: 'v0.14.3',
            dependencies: [
                "react@^0.14.2"
            ],
            build: 'rm package.json && npm install --prefix . react-addons-create-fragment@0.14.2'
        }
    ]
})();
