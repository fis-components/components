'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/angular-ui/bootstrap.git',
            version: '0.14.3',
            name: 'angular-ui-bootstrap',
            main: 'index.js',
            build: 'rm package.json && npm install --prefix . angular-ui-bootstrap@0.14.3',
            dependencies: [
                "angular@^1.3.x"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/angular\-ui\-bootstrap\/(.*)$/,
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
