'use strict';

module.exports = (function() {
    return [{
        protocol: "github",
        github: {
          author: "fis-components"
        },
        repos: 'https://github.com/mathiasbynens/jquery-placeholder',
        version: '2.0.8',
        main: 'jquery.placeholder.js',
        description: 'A jQuery plugin that enables HTML5 placeholder behavior for browsers that aren’t trying hard enough yet https://mths.be/placeholder',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: 'query.placeholder.js',
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "jquery.placeholder.js": {
              "deps": ["jquery"]
            }
        }
    }];
})();
