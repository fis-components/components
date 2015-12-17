'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/yiminghe/gregorian-calendar-format.git',
            version: '4.0.4',
            tag: 'master',
            name: 'gregorian-calendar-format',
            main: 'lib/gregorian-calendar-format.js',
            build: 'rm package.json && npm install --prefix . gregorian-calendar-format@4.0.4',
            
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/gregorian\-calendar\-format\/lib\/(.*)$/,
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
