'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/stephband/jparallax.git',
        version: '2.0.3',
        name: 'jquery-parallax',
        main: 'jquery.parallax.js',
        dependencies: [
            "jquery"
        ],

        mapping: [
            {
                reg: /^\/js\/jquery\.parallax\.js$/,
                release: 'jquery.parallax.js'
            },
            {
                reg: /^\/js\/jquery\.event\.frame\.js$/,
                release: 'jquery.event.frame.js'
            },
            {
                reg: /^\/css\/(.*)$/,
                release: '$1'
            },
            {
                reg: /^\/README\.textile$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],

        shim: {
            "jquery.parallax.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            },
            "jquery.event.frame.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            }
        }
    }]
})();
