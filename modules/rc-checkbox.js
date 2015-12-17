'use strict';

module.exports = (function() {
    return [
        {
            repos: 'http://github.com/react-component/checkbox.git',
            description: "React checkbox",
            version: '1.1.2',
            tag: 'master',
            name: 'rc-checkbox',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . rc-checkbox@1.1.2',
            dependencies: [
                "classnames@2.x"
            ],
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/rc\-checkbox\/lib\/(.*)$/,
                    release: 'lib/$1'
                },
                {
                    reg: /^\/node_modules\/rc\-checkbox\/assets\/(.*)$/,
                    release: 'assets/$1'
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
