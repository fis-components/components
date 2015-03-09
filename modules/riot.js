'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/muut/riotjs',
        version: 'v2.0.12',
        description: 'A React-like, 3.5KB user interface library',
        name: 'riot',
        main: 'riot.js',
        mapping: [
            {
                reg: 'riot.js',
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
