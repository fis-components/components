'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
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
              "deps": ["jquery"]
            },

            "affix.js": {
              "deps": ["jquery"]
            },

            "alert.js": {
              "deps": ["jquery"]
            },

            "button.js": {
              "deps": ["jquery"]
            },

            "carousel.js": {
              "deps": ["jquery"]
            },

            "collapse.js": {
              "deps": ["jquery"]
            },

            "dropdown.js": {
              "deps": ["jquery"]
            },

            "modal.js": {
              "deps": ["jquery"]
            },

            "popover.js": {
              "deps": ["jquery"]
            },

            "scrollspy.js": {
              "deps": ["jquery"]
            },

            "tab.js": {
              "deps": ["jquery"]
            },

            "tooltip.js": {
              "deps": ["jquery"]
            },

            "transition.js": {
              "deps": ["jquery"]
            }
        }
    }];
})();
