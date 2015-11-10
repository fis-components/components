'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rackt/redux.git',
            version: 'v3.0.4',
            name: 'redux',
            main: 'redux.js',
            build: 'rm package.json && npm install --prefix . redux@3.0.4',
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/redux\/dist\/(.*)$/,
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
        }
    ]
})();
