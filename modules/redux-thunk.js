'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/gaearon/redux-thunk.git',
            version: 'v1.0.0',
            name: 'redux-thunk',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . redux-thunk@1.0.0',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-thunk\/lib\/(.*)$/,
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
