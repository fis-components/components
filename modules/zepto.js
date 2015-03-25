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
        ],
        shim: {
            'zepto.js': {

                "deps": ["Zepto"]
            }
        }
    }]
})();
