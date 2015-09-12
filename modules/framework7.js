'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/nolimits4web/Framework7',
        version: 'v1.2.0',
        description: 'Full Featured HTML Framework For Building iOS Apps http://www.idangero.us/framework7/',
        name: 'framework7',
        main: 'framework7.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*)\/my-app\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/js\/(.*\.js)$/,
                release: '$1'
            },
            {
                reg: /^\/dist\/css\/(.*\.css)$/,
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
        ]
    }]
})();
