'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/sindresorhus/object-assign.git',
            version: 'v4.0.1',
            name: 'object-assign',
            main: 'index.js',
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/index\.js$/,
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
