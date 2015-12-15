'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/hammerjs/hammer.js.git',
            version: '2.0.4',
            name: 'hammerjs',
            main: 'hammer.js',
            mapping: [
                {
                    reg: /^\/hammer\.js$/,
                    release: '$0'
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
