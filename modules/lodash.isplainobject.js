'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.2.0',
            tag: 'master',
            name: 'lodash.isplainobject',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash.isplainobject@3.2.0',
            dependencies: [
                "lodash._basefor@^3.0.0",
                "lodash.isarguments@^3.0.0",
                "lodash.keysin@^3.0.0"
            ],
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\.isplainobject\/index\.js$/,
                    release: 'index.js'
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
