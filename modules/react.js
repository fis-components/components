'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/facebook/react.git',
            version: 'v0.13.3',
            name: 'react',
            main: 'react.js',
            build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt build',
            mapping: [
                {
                    reg: /\.min\.(js|css)$/i,
                    release: false
                },
                {
                    reg: /^\/build\/(JSXTransformer\.js)$/i,
                    release: 'JSXTransformer.js'
                },
                {
                    reg: /^\/build\/(react-with-addons\.js)$/i,
                    release: 'react-with-addons.js'
                },
                {
                    reg: /^\/build\/(react\.js)$/i,
                    release: 'react.js'
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
        },

        {
            version: 'v0.14.2',
            extend: 'v0.13.3'
        }
    ]
})();
