'use strict';

module.exports = (function() {
    return [{
        name: 'blur',
        main: 'blur.js',
        repos: 'https://github.com/jakiestfu/Blur.js',
        version: '0.0.1',
        tag: 'master',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /^\/blur\.js$/,
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
