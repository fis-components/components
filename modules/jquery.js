'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery.git',
        version: '1.9.1',
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
        repos: 'https://github.com/jquery/jquery.git',
        version: '2.1.0',
        build: 'npm run build',
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