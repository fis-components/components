'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jashkenas/backbone.git',
        version: '1.1.2',
        main: 'backbone.js',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/backbone\.js/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        dependencies: [
            "underscore@1.7.0",
            "jquery@1.9.1"
        ]
    }];
})();
