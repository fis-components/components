'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/moment/moment.git',
        version: '2.10.6',
        description: 'Parse, validate, manipulate, and display dates in javascript. http://momentjs.com',
        name: 'moment',
        main: 'moment.js',
        mapping: [
            {
                reg: /^\/moment\.js$/,
                release: '$&'
            },
            {
                reg: /^\/locale\/.*$/,
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
