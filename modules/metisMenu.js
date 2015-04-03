'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/onokumus/metisMenu',
        version: 'version 1.1.3',
        description: 'A jQuery menu plugin for Bootstrap 3',
        name: 'metisMenu',
        main: 'metisMenu.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /^\/dist\/(metisMenu\.js)/i,
                release: '$1'
            },
            {
                reg: /^\/dist\/(metisMenu\.css)/i,
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
