'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/r3dm/warning.git',
            version: 'v2.1.0',
            name: 'warning',
            main: 'warning.js',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/(browser\.js)$/,
                    release: 'warning.js'
                },
                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ],
            shim: {
                'warning.js': {
                    "replace": {
                        "from": "process.env.NODE_ENV !== 'production'",
                        "to": "true"
                    }
                }
            }
        }
    ]
})();
