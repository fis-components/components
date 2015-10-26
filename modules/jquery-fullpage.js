'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/alvarotrigo/fullPage.js.git',
        version: '2.6.9',
        name: 'jquery-fullpage',
        main: 'jquery.fullpage.js',
        dependencies: [
            "jquery"
        ],

        mapping: [
            {
                reg: /^\/jquery\.fullPage\.js$/,
                release: 'jquery.fullpage.js'
            },
            {
                reg: /^\/jquery\.fullPage\.css$/,
                release: 'jquery.fullpage.css'
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
    },
    {
        version: '2.7.4',
        extend: '2.6.9'
    }]
})();
