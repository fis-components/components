'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/eternicode/bootstrap-datepicker.git',
        version: 'v1.4.0',
        description: 'Bootstrap datapicker',
        dependencies: [
            "bootstrap"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(?:css|js)\/(.*?)$/,
                release: '$1'
            },
            {
                reg: /^\/dist\/locales\/(.*?)$/,
                release: 'locales/$1'
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
