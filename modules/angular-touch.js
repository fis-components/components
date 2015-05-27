'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/bower-angular-touch',
        version: 'v1.4.0',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-touch',
        main: 'angular-touch.js',
        mapping: [
            {
                reg: /^\/angular-touch\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "angular-touch.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.4.0"
        ]
    }, {
        repos: 'https://github.com/angular/bower-angular-touch',
        version: 'v1.3.14',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-touch',
        main: 'angular-touch.js',
        mapping: [
            {
                reg: /^\/angular-touch\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "angular-touch.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.3.14"
        ]
    }]
})();
