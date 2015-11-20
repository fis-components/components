'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/hapijs/qs.git',
            version: 'v6.0.0',
            name: 'qs',
            main: 'index.js',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/lib\/(.*)$/,
                    release: '$1'
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
        },

        {
            version: 'v5.2.0',
            extend: 'v6.0.0'
        },

        {
            version: 'v5.1.0',
            extend: 'v6.0.0'
        },

        {
            version: 'v5.0.0',
            extend: 'v6.0.0'
        },

        {
            version: 'v4.0.0',
            extend: 'v6.0.0'
        }
    ]
})();
