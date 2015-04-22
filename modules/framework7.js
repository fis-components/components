'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/nolimits4web/Framework7',
        version: 'v1.0.5',
        description: 'Full Featured HTML Framework For Building iOS Apps http://www.idangero.us/framework7/',
        name: 'framework7',
        main: 'framework7.js',
        mapping: [
            {
                reg: '/dist/js/framework7.js',
                release: 'framework7.js'
            },
            {
                reg: '/dist/css/framework7.css',
                release: 'framework7.css'
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
