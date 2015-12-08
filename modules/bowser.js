'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ded/bowser.git',
        version: 'v1.0.0',
        description: 'a browser detector',
        name: 'bowser',
        main: 'bowser.js',
        mapping: [
            {
                reg: /^\/bowser\.js$/,
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
        ],
        umd2commonjs: false
    }]
})();
