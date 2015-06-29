'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/silviomoreto/bootstrap-select.git',
        version: 'v1.7.3',
        description: 'Bootstrap select',
        main: 'bootstrap-select.js',
        dependencies: [
            "bootstrap@>=3.0",
            "jquery@>=1.8"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /\.map$/,
                release: false
            },
            {
                reg: /^\/dist\/(?:css|js)\/(.*?)$/,
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
    }];
})();
