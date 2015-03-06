'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/angular/bower-angular',
        version: 'v1.3.14',
        description: 'HTML enhanced for web apps http://angularjs.org',
        name: 'angular',
        main: 'angular.js',
        mapping: [
            {
                reg: /^\/angular\.js$/,
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
            "angular.js": {
              "exports": "window.angular"
            }
        }
    }]
})();
