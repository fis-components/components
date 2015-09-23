'use strict';

module.exports = (function() {
    return [
    
    {
        repos: 'https://github.com/ichord/At.js',
        version: 'v1.1.0',
        description: 'Add Github like mentions autocomplete to your application. http://ichord.github.com/At.js',
        name: 'jquery-atwho',
        main: 'jquery.atwho.js',
        dependencies: [
            "jquery@>=1.7.0",
            "jquery-caret"
        ],
        mapping: [
            {
                reg: '/dist/js/jquery.atwho.js',
                release: 'jquery.atwho.js'
            },
            {
                reg: '/dist/css/jquery.atwho.css',
                release: 'jquery.atwho.css'
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
            'jquery.atwho.js': {
                deps: ["jquery-caret"]
            }
        }
    },

    {
        version: 'v1.3.2',
        extend: 'v1.1.0'
    }

    ];
})();
