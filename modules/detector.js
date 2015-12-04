'use strict';

module.exports = (function() {
    return [{
        name: 'detector',
        main: 'detector.js',
        repos: 'https://github.com/hotoo/detector',
        version: '2.4.1',
        mapping: [
            {
                reg: /^\/detector\.js$/,
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
