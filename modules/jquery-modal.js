'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/kylefox/jquery-modal.git',
        version: 'v0.5.2',
        name: 'jquery-modal',
        main: 'jquery.modal.js',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\.modal\.js$/,
                release: 'jquery.modal.js'
            },
            {
                reg: /^\/jquery\.modal\.css$/,
                release: 'jquery.modal.css'
            },
            {
                reg: /^\/close\.png$/,
                release: 'close.png'
            },
            {
                reg: /^\/spinner\.gif$/,
                release: 'spinner.gif'
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
            "jquery.modal.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();