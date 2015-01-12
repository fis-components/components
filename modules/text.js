'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/requirejs/text.git',
        version: '2.0.12',
        name: 'text',
        main: 'text.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/text\.js$/,
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
