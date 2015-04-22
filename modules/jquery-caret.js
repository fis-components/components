'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ichord/Caret.js',
        version: 'v0.2.2',
        description: 'Get caret postion and offset from text field http://ichord.github.com/Caret.js',
        name: 'jquery-caret',
        main: 'jquery.caret.js',
        dependencies: [
            "jquery@>=1.7.0"
        ],
        mapping: [
            {
                reg: '/dist/jquery.caret.js',
                release: 'jquery.caret.js'
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
            'jquery.caret.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
