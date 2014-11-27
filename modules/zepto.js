'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/madrobby/zepto.git',
        version: 'v1.1.4',
        description: 'zepto',
        build: 'npm install && npm run-script dist',
        main: 'zepto.js',
        mapping: [
            {
                reg: /dist\/(.*\.js)/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]    
    }]
})();