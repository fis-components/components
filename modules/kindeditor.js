'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/kindsoft/kindeditor',
        version: 'master',
        description: 'WYSIWYG HTML editor http://kindeditor.org/',
        name: 'kindeditor',
        main: 'kindeditor.js',
        mapping: [
            {
                reg: /^\/kindeditor-all\.js/,
                release: 'kindeditor.js'
            },
            {
                reg: /^\/lang\/(.*?)$/,
                release: '$&'
            },
            {
                reg: /^\/themes\/(.*?)$/,
                release: '$&'
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
