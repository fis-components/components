'use strict';

module.exports = (function() {
    return [
        {
            repos: 'http://github.com/react-component/calendar.git',
            description: "React Calendar",
            version: '4.0.1',
            tag: 'master',
            name: 'rc-calendar',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . rc-calendar@4.0.1',
            
            mapping: [
                {
                    reg: /\bmin\b|__tests__/i,
                    release: false
                },
                {
                    reg: /^\/node_modules\/rc\-calendar\/lib\/(.*)$/,
                    release: 'lib/$1'
                },
                {
                    reg: /^\/node_modules\/rc\-calendar\/assets\/(.*)$/,
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
