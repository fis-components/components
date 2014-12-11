'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/jquery/jquery.git',
        version: '1.9.1',
        name: 'jquery',
        main: 'jquery.js',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt',
        mapping: [
            {
                reg: /^\/dist\/(.*\.js)/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }, {
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/jquery/jquery.git',
        version: '2.1.0',
        build: 'npm run build',
        main: 'jquery.js',
        name: 'jquery',
        mapping: [
            {
                reg: /^\/dist\/(.*\.js)/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();