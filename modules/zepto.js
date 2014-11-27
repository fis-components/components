'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/madrobby/zepto.git',
        version: 'v1.1.4',
        build: 'npm install && npm run-script dist',
        maping: [
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