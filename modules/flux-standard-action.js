'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/acdlite/flux-standard-action.git',
            version: '0.6.0',
            tag: 'master',
            name: 'flux-standard-action',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . flux-standard-action@0.6.0',
            dependencies: [
                "lodash.isplainobject@^3.2.0"
            ],
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/flux\-standard\-action\/lib\/(.*)$/,
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
