'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/lodash/lodash',
        version: '3.5.0',
        description: 'A JavaScript utility library delivering consistency, modularity, performance, & extras. ',
        name: 'lodash',
        main: 'lodash.js',
        mapping: [
            {
                reg: /^\/lodash\.js$/,
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
        shim: {
            "lodash.js": {
                exports: "this._"
            }
        }
    }]
})();
