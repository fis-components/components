'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/huacnlee/jquery.qeditor',
        version: 'v0.1.1',
        description: 'This is a simple WYSIWYG editor with jQuery.',
        name: 'jquery-qeditor',
        main: 'jquery.qeditor.js',
        mapping: [
            {
                reg: /^\/dist\/(jquery\.qeditor\.js)/,
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
