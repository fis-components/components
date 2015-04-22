'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ichord/At.js',
        version: 'v1.1.0',
        description: 'Add Github like mentions autocomplete to your application. http://ichord.github.com/At.js',
        name: 'atwho',
        main: 'atwho.js',
        dependencies: [
            "jquery@>=1.7.0",
            "caret@>=v0.2.2"
        ],
        mapping: [
            {
                reg: '/dist/js/jquery.atwho.js',
                release: 'atwho.js'
            },
            {
                reg: '/dist/css/jquery.atwho.css',
                release: 'atwho.css'
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
            'atwho.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
