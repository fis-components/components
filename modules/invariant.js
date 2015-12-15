'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/zertosh/invariant.git',
            version: 'v2.2.0',
            name: 'invariant',
            main: 'invariant.js',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/(browser\.js)$/,
                    release: 'invariant.js'
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
                'invariant.js': {
                    "replace": {
                        "from": "process.env.NODE_ENV !== 'production'",
                        "to": "true"
                    }
                }
            }
        }
    ]
})();
