'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/yiminghe/css-animation.git',
            version: '1.1.1',
            tag: 'master',
            name: 'css-animation',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . css-animation@1.1.1',
            
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/css\-animation\/lib\/(.*)$/,
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
