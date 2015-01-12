'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/defunkt/jquery-pjax.git',
        version: 'v1.9.4',
        name: 'jquery-pjax',
        main: 'jquery.pjax.js',
        dependencies: [
            "jquery@>=1.8"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\.pjax\.js$/,
                release: 'jquery.pjax.js'
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
            "jquery.pjax.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
