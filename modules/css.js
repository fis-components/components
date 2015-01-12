'use strict';

module.exports = (function() {
    return [{
        description: "require css component.",
        repos: 'https://github.com/guybedford/require-css.git',
        version: '0.1.8',
        name: 'css',
        main: 'css.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/css\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
