'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery-ui.git',
        version: '1.11.2',
        description: 'jquery-ui',
        dependencies: [
            "jquery@>=1.6"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/ui\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '/themes/**',
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
    }];
})();
