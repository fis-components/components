'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/yiminghe/gregorian-calendar.git',
            version: '4.0.4',
            tag: 'master',
            name: 'gregorian-calendar',
            main: 'lib/gregorian-calendar.js',
            build: 'rm package.json && npm install --prefix . gregorian-calendar@4.0.4',
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/gregorian\-calendar\/lib\/(.*)$/,
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
