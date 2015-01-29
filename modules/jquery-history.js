'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/balupton/jquery-history.git',
        version: '1.5.0',
        tag: 'v1.5.0-final',
        name: 'jquery-history',
        main: 'jquery.history.js',
        dependencies: [
            "jquery@>=1.4.1"
        ],
        mapping: [
            {
                reg: /^\/scripts\/jquery\.history\.js$/,
                release: 'jquery.history.js'
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
            "jquery.history.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
