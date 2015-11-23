'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/JedWatson/classnames.git',
            version: 'v2.2.0',
            name: 'classnames',
            main: 'index.js',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^index\.js$/,
                    release: 'index.js'
                },
                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();
