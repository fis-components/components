'use strict';

module.exports = (function() {
    return [
        {
            repos: 'http://github.com/react-component/animate.git',
            description: "css-transition ui component for react",
            version: '2.0.2',
            tag: 'master',
            name: 'rc-animate',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . rc-animate@2.0.2',
            
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/rc\-animate\/lib\/(.*)$/,
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
