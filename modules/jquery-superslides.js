'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/nicinabox/superslides.git',
        version: '0.6.2',
        name: 'jquery-superslides',
        main: 'jquery.superslides.js',
        dependencies: [
            "jquery"
        ],
        mapping: [
            {
                reg: /^\/dist\/jquery\.superslides\.js$/,
                release: 'jquery.superslides.js'
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
            "jquery.superslides.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            }
        }
    }]
})();
