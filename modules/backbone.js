'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jashkenas/backbone.git',
        version: '1.1.2',
        main: 'backbone.js',
        mapping: [
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
            "github:fis-components/underscore@1.7.0",
            "github:fis-components/jquery@1.9.1"
        ]    
    }];
})();
