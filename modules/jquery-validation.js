'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/jzaefferer/jquery-validation.git',
        version: '1.13.1',
        description: 'jquery-validation',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt release',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /\.min\.js$/,
                release: false
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
