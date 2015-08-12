'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/jquery/jquery.git',
            version: '1.9.1',
            name: 'jquery',
            main: 'jquery.js',
            build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt',
            mapping: [
                {
                    reg: /\.min\.(js|css)$/,
                    release: false
                },
                {
                    reg: /^\/dist\/(.*\.js)/,
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
        },
        
        {
          version: '1.11.3',
          extend: '1.9.1'
        },
        {
          version: '1.11.2',
          extend: '1.9.1'
        },

        {
            version: '2.1.0',
            build: null,
            extend: '1.9.1'
        },
        {
            version: '2.1.1',
            extend: '2.1.0'
        },
        {
            version: '2.1.2',
            extend: '2.1.0'
        },
        {
            version: '2.1.3',
            extend: '2.1.0'
        },
        {
            version: '2.1.4',
            extend: '2.1.0'
        }
    ]
})();
