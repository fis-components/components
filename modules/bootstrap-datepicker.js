'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/eternicode/bootstrap-datepicker.git',
        version: 'v1.4.0',
        description: 'Bootstrap datapicker',
        main: 'bootstrap-datepicker.js',
        dependencies: [
            "bootstrap@>=2.0.4",
            "jquery@>=1.7.1"
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
        ],
        shim: {
            'bootstrap-datepicker.js': {
                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "require('jquery')"
                }
            }
        }
    }];
})();
