'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/bower-angular-sanitize',
        version: 'v1.4.0',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular-sanitize',
        main: 'angular-sanitize.js',
        mapping: [
            {
                reg: /^\/angular-sanitize\.js$/,
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
            "angular-sanitize.js": {
              "deps": ["angular"]
            }
        },
        dependencies: [
            "angular@~1.4.0"
        ]
    }]
})();
