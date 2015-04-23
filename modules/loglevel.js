'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/pimterry/loglevel',
        version: '1.2.0',
        description: 'Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods http://pimterry.github.com/loglevel',
        name: 'loglevel',
        main: 'loglevel.js',
        mapping: [
            {
                reg: '/dist/loglevel.js',
                release: 'loglevel.js'
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
