'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
            author: "fis-components"
        },
        repos: 'https://github.com/FortAwesome/Font-Awesome.git',
        name: "font-awesome",
        version: 'v4.2.0',
        description: 'The iconic font and CSS toolkit http://fontawesome.io',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/css\/(.*?)$/,
                release: '$&'
            },
            {
                reg: /^\/scss\/(.*?)$/,
                release: '$&'
            },
            {
                reg: /^\/less\/(.*?)$/,
                release: '$&'
            },
            {
                reg: /^\/fonts\/(.*?)$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
