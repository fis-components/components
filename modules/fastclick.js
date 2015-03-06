'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ftlabs/fastclick',
        version: 'v1.0.6',
        description: 'Polyfill to remove click delays on browsers with touch UIs',
        name: 'fastclick',
        main: 'fastclick.js',
        mapping: [
            {
                reg: /^\/lib\/(fastclick\.js)/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
