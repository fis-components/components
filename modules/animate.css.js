'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/daneden/animate.css.git',
        name: "animate.css",
        main: "animate.css",
        version: 'v3.1.0',
        description: 'A cross-browser library of CSS animations. As easy to use as an easy thing. http://daneden.github.io/animate.css',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/animate\.css$/,
                release: '$&'
            },
            {
                reg: /^\/readme\.md$/i,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
