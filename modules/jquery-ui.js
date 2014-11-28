'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery-ui.git',
        version: '1.11.2',
        main: 'jquery-ui.js',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt concat',
        dependencies: [
            "github:fis-components/jquery@>=1.6"
        ],
        mapping: [
            {
                reg: '/ui/**',
                release: true
            },
            {
                reg: '/themes/**',
                release: true
            },
            {
                reg: /\/dist\/(.*?)$/,
                release: '$1'
            }
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();