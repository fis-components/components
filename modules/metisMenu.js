'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/onokumus/metisMenu',
        version: '1.1.3',
        description: 'A jQuery menu plugin for Bootstrap 3',
        name: 'metismenu',
        main: 'metismenu.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: '/dist/metisMenu.js',
                release: 'metismenu.js'
            },
            {
                reg: '/dist/metisMenu.css',
                release: 'metismenu.css'
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
