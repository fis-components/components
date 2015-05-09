'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/Ranks/emojione',
        version: 'v1.4.0',
        description: 'Emoji One is a carefully engineered first-of-its-kind set of emoji designed specifically for the web. For the first time ever, web-sites worldwide can translate emoji code from mobile devices and legally display the corresponding emoji icon for their users. Of course… ',
        name: 'emojione',
        main: 'emojione.js',
        mapping: [ 
            {
                reg: '/lib/js/emojione.js',
                release: 'emojione.js'
            },
            {
                reg: '/assets/css/emojione.css',
                release: 'emojione.css'
            },
            {
                reg: /^\/assets\/css\/(.*)$/,
                release: false
            },
            {
                reg: /^\/assets\/(.*)$/,
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
