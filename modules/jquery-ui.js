'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery-ui.git',
        version: '1.11.2',
        main: 'jquery-ui.js',
        description: 'jquery-ui',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt concat',
        dependencies: [
            "github:fis-components/jquery@>=1.6"
        ],
        mapping: [
            {
                reg: '/ui/**',
                release: '$&'
            },
            {
                reg: '/themes/**',
                release: '$&'
            },
            {
                reg: /^\/dist\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
