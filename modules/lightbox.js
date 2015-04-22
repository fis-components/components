'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/lokesh/lightbox2/',
        version: '2.7.1',
        description: 'The original lightbox script, finally on github. http://lokeshdhakar.com/projects/lightbox2/',
        name: 'lightbox',
        main: 'lightbox.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: '/js/lightbox.js',
                release: 'lightbox.js'
            },
            {
                reg: '/css/lightbox.css',
                release: 'lightbox.css'
            },
            {
                reg: /^\/img\/([^\/]*\.(png|gif))$/,
                release: '$&'
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
            "jquery.qeditor.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            }
        }
    }]
})();
