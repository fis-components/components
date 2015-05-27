'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/bower-angular-mocks',
        version: 'v1.4.0',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-mocks',
        main: 'angular-mocks.js',
        mapping: [
            {
                reg: /^\/angular-mocks\.js$/,
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
            "angular-mocks.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.3.14"
        ]
    }]
})();
