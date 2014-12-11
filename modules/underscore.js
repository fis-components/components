'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/jashkenas/underscore.git',
        version: '1.7.0',
        main: 'underscore.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/underscore\.js/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();