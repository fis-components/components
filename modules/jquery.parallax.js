'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/stephband/jparallax.git',
        version: '2.0.3',
        name: 'jquery-parallax',
        main: 'js/jquery.parallax.js',
        dependencies: [
            "jquery"
        ],

        mapping: [
            {
                reg: /^\/jquery\.parallax\.js$/,
                release: 'jquery.parallax.js'
            },
            {
                reg: /^\/jquery\.parallax\.css$/,
                release: 'jquery.parallax.css'
            },
            {
                reg: /^\/README\.textile$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
