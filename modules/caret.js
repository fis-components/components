'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ichord/Caret.js',
        version: 'v0.2.2',
        description: 'Get caret postion and offset from text field http://ichord.github.com/Caret.js',
        name: 'caret',
        main: 'caret.js',
        dependencies: [
            "jquery@>=1.7.0"
        ],
        mapping: [
            {
                reg: '/dist/jquery.caret.js',
                release: 'caret.js'
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
            'caret.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
