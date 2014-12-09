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
                reg: /^\/css\/(.*?)$/,
                release: '$1'
            },
            {
                reg: /^\/scss\/(.*?)$/,
                release: '$1'
            },
            {
                reg: /^\/less\/(.*?)$/,
                release: '$1'
            },
            {
                reg: /^\/fonts\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
