'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/timschlechter/bootstrap-tagsinput',
        version: '0.5.0',
        description: 'jQuery tags input plugin based on Twitter Bootstrap. http://timschlechter.github.io/bootstrap-tagsinput/examples/',
        name: 'bootstrap-tagsinput',
        main: 'bootstrap-tagsinput.js',
        dependencies: [
            "bootstrap@>=2.3.2",
            "jquery@>=1.7.1"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*\.(css|js))$/,
                release: '$1'
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
            'bootstrap-tagsinput.js': {
                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "require('jquery')"
                }
            }
            
        }
    }];
})();
