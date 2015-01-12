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
              "exports": "requie('jquery')"
            },

            "affix.js": {
              "deps": ["jquery"]
            },

            "alert.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "button.js": {
              "deps": ["jquery"]
            },

            "carousel.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "collapse.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "dropdown.js": {
              "deps": ["jquery"]
            },

            "modal.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "popover.js": {
              "deps": ["jquery"]
            },

            "scrollspy.js": {
              "deps": ["jquery"]
            },

            "tab.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "tooltip.js": {
              "deps": ["jquery", "./transition.js"]
            },

            "transition.js": {
              "deps": ["jquery"]
            }
        }
    }];
})();
