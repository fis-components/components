'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/CodeSeven/toastr.git',
        version: '2.1.2',
        name: 'jquery-toastr',
        main: 'toastr.js',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/toastr\.js$/,
                release: '$0'
            },
            {
                reg: /^\/build\/toastr\.css$/,
                release: 'toaster.css'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
