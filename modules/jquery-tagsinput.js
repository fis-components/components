'use strict';

module.exports = (function() {
    return [{
        name: 'jquery-tagsinput',
        main: 'jquery.tagsinput.js',
        repos: 'https://github.com/xoxco/jQuery-Tags-Input.git',
        version: 'v1.3.6',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /^\/src\/(.*?\.(js|css))$/,
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
            "jquery.tagsinput.js": {
                "deps": ["jquery"],
                "vars": ["jQuery"]
            }
        }
    }];
})();
