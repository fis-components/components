'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/dangrossman/bootstrap-daterangepicker.git',
        version: 'v2.1.17',
        description: 'Date range picker component for Bootstrap',
        main: 'daterangepicker.js',
        dependencies: [
            "bootstrap@>=2.0.4",
            "jquery@>=1.7.1",
            "moment@>=2.9.0"
        ],

        mapping: [
            {
                reg: /^\/daterangepicker\.(?:css|js)$/,
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
        ],
        shim: {
            'daterangepicker.js': {
                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "require('jquery')"
                }
            }
            
        }
    }];
})();
