'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery.git',
        version: '1.9.1',
        build: 'npm run build',
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
    }, {
        repos: 'https://github.com/jquery/jquery.git',
        version: '2.1.0',
        build: 'npm run build',
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