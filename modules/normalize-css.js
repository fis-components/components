'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/necolas/normalize.css.git',
        version: 'v2.1.3',
        name: 'normalize-css',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/normalize\.css$/,
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
