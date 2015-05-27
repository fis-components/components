'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/twbs/bootstrap.git',
        version: 'v3.3.1',
        main: 'bootstrap.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },

            {
                reg: /^\/dist\/js\/npm\.js$/,
                release: false
            },

            {
                reg: /^\/dist\/js\/(.*\.js)$/,
                release: '$1'
            },

            {
                reg: /^\/dist\/(.*)$/,
                release: '$1'
            },

            {
                reg: /^\/js\/([^\/]*\.js)$/,
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
        dependencies: [
            "jquery@>=1.9.1"
        ],
        shim: {
            "bootstrap.js": {
              "content": [
                "require('./alert.js');",
                "require('./button.js');",
                "require('./carousel.js');",
                "require('./collapse.js');",
                "require('./dropdown.js');",
                "require('./modal.js');",
                "require('./tooltip.js');",
                "require('./popover.js');",
                "require('./scrollspy.js');",
                "require('./tab.js');",
                "require('./affix.js');",
                ].join('\n'),
              "deps": ["jquery"],
              "vars": ["jQuery"],
              "exports": "require('jquery')"
            },

            "affix.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },

            "alert.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "button.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },

            "carousel.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "collapse.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "dropdown.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },

            "modal.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "popover.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"],
              "deps": ["./tooltip.js"]
            },

            "scrollspy.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },

            "tab.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "tooltip.js": {
              "deps": ["jquery", "./transition"],
              "vars": ["jQuery"]
            },

            "transition.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            }
        }
    }, {
      extend: 'v3.3.1',
      version: 'v3.3.2',
    }, {
      extend: 'v3.3.1',
      version: 'v3.3.4',
    }];
})();
