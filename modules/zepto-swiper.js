'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/nolimits4web/Swiper.git',
        version: 'v3.0.6',
        name: 'zepto-swiper',
        main: 'swiper.js',
        dependencies: [
            "zepto@~1.1.6"
        ],
        mapping: [
            {
                reg: /^\/dist\/js\/swiper\.js$/i,
                release: 'swiper.js'
            },
            {
                reg: /^\/dist\/css\/swiper\.css$/i,
                release: 'swiper.css'
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
            'swiper.js': {
                "replace": {
                    "from": /var\s\$;[\s\S]*?\$\s=\sDom7;[\s\S]*?\}/g,
                    "to": "var $ = require('zepto');"
                }
            }
        }
    }]
})();
