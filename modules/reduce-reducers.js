'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/acdlite/reduce-reducers.git',
            version: '0.1.1',
            tag: 'master',
            name: 'reduce-reducers',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . reduce-reducers@0.1.1',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/reduce\-reducers\/lib\/(.*)$/,
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
