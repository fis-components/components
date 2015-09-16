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
                    reg: /\.min\.(js|css)$/,
                    release: false
                },
                {
                    reg: /^\/build\/packages\/react\/(.*\.js)/,
                    release: '$1'
                },
                {
                    reg: /^\/README\.md$/,
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
