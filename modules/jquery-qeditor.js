'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/huacnlee/jquery.qeditor',
        version: '0.1.1',
        description: 'This is a simple WYSIWYG editor with jQuery.',
        name: 'jquery-qeditor',
        main: 'jquery.qeditor.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /^\/dist\/js\/(jquery\.qeditor\.js)/i,
                release: '$1'
            },
            {
                reg: /^\/dist\/css\/(jquery\.qeditor\.css)/i,
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
        ],
        shim: {
            "jquery.qeditor.js": {
              "deps": ["jquery"],
              "vars": ["jQuery"]
            }
        }
    }]
})();
