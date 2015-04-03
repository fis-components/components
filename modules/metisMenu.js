'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/onokumus/metisMenu',
        version: 'v1.1.3',
        description: 'A jQuery menu plugin for Bootstrap 3',
        name: 'metisMenu',
        main: 'metisMenu.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*?)$/,
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
