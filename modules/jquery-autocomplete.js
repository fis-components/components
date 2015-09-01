'use strict';

module.exports = (function() {
    return [{
        name: 'jquery-autocomplete',
        main: 'jquery.autocomplete.js',
        repos: 'https://github.com/devbridge/jQuery-Autocomplete.git',
        version: 'v1.2.22',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /^\/src\/(.*?\.js)$/,
                release: '$1'
            },
            {
                reg: /^\/readme\.md$/,
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
