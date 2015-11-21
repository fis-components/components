'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/jlongster/redux-simple-router.git',
            version: '0.0.8',
            name: 'redux-simple-router',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . redux-simple-router@0.0.8',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/redux\-simple\-router\/lib\/(.*)$/,
                    release: 'lib/$1'
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
