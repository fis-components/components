'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/trentrichardson/jQuery-Timepicker-Addon.git',
        version: 'v1.5.0',
        name: 'jquery-ui-timepicker-addon',
        main: 'jquery-ui-timepicker-addon.js',
        dependencies: [
            "jquery@>=1.6"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*\.(?:js|css))$/,
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
            "jquery-ui-sliderAccess.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },

            "jquery-ui-timepicker-addon.js": {
              "deps": ["jquery", "./jquery-ui-sliderAccess"],
              "vars": ["jQuery"]
            }
        }
    }]
})();
