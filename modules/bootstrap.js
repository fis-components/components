'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/twbs/bootstrap.git',
        version: 'v3.3.1',
        main: 'js/bootstrap.js',
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
                reg: /^\/dist\/(.*)/,
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
            "js/bootstrap.js": {
              "deps": ["jquery"]
            }
        }
    }];
})();
