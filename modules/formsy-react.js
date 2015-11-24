'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/christianalfoni/formsy-react.git',
            version: 'v0.17.0',
            name: 'formsy-react',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . formsy-react@0.17.0',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/formsy-react\/lib\/(.*)$/,
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
            ],
            umd2commonjs: false
        }
    ]
})();
