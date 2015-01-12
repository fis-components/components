'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/Krinkle/jquery-json.git',
        version: 'v2.5.1',
        name: 'jquery-json',
        main: 'jquery.json.js',
        dependencies: [
            "jquery@>=1.6"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/src\/jquery\.json\.js$/,
                release: 'jquery.json.js'
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
            "jquery.json.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
