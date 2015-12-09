'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/thesabbir/simple-line-icons.git',
        name: "simple-line-icons",
        version: 'v0.1.2',
        main: 'css/simple-line-icons.css',
        description: 'Simple Line Icons Package https://thesabbir.github.io/simple-line-icons',
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
