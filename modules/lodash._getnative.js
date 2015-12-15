'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/lodash/lodash.git',
            version: '3.9.1',
            tag: '3.9.1-npm',
            name: 'lodash._getnative',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . lodash._getnative@3.9.1',
            mapping: [
                {
                    reg: /^\/node_modules\/lodash\._getnative\/index\.js$/,
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
        },

        {
            version: '3.9.2',
            extend: '3.9.1',
            tag: '3.9.2-npm',
            build: 'rm package.json && npm install --prefix . lodash._getnative@3.9.2',
        },

        {
            version: '3.9.3',
            extend: '3.9.1',
            tag: '3.9.3-npm',
            build: 'rm package.json && npm install --prefix . lodash._getnative@3.9.3',
        },

        {
            version: '3.10.0',
            extend: '3.9.1',
            tag: '3.10.0-npm',
            build: 'rm package.json && npm install --prefix . lodash._getnative@3.10.0',
        },

        {
            version: '3.10.1',
            extend: '3.9.1',
            tag: '3.10.1-npm',
            build: 'rm package.json && npm install --prefix . lodash._getnative@3.10.1',
        }
    ]
})();
