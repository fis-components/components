'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/angular.git',
        version: '2.0.0-alpha.45',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular2',
        main: 'angular2.js',
        build: 'rm package.json && npm install --prefix . angular2@2.0.0-alpha.45',
        mapping: [
            {
                reg: /^\/node_modules\/angular2\/bundles\/(.*)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
