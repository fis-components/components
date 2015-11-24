'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/christianalfoni/form-data-to-object.git',
            version: 'v0.2.0',
            name: 'form-data-to-object',
            main: 'index.js',
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/index.js$/,
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
