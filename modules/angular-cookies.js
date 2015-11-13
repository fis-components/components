'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/angular/angular.js.git',
            version: 'v1.4.7',
            name: 'angular-cookies',
            main: 'angular-cookies.js',
            build: 'rm package.json && npm install --prefix . angular-cookies@1.4.7',
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/angular\-cookies\/(.*)$/,
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
