'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jashkenas/underscore.git',
        version: '1.7.0',
        main: 'underscore.js',
        mapping: [
            {
                reg: /^\/underscore\.js/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]    
    }]
})();