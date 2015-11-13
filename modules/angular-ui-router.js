'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/angular-ui/ui-router.git',
            version: '0.2.15',
            name: 'angular-ui-router',
            main: 'angular-ui-router.js',
            build: 'rm package.json && npm install --prefix . angular-ui-router@0.2.15',
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/angular\-ui\-router\/release\/(.*)$/,
                    release: '$1'
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
