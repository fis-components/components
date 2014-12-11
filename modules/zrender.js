'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/ecomfe/zrender.git',
        version: '2.0.6',
        name: 'zrender',
        main: 'zrender.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/src\/(.*)$/,
                release: '$1'
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