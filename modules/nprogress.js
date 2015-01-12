'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/rstacruz/nprogress.git',
        version: 'v0.1.6',
        name: 'nprogress',
        main: 'nprogress.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/nprogress\.js$/,
                release: '$&'
            },
            {
                reg: /^\/nprogress\.css$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/i,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
