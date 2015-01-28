'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/brianreavis/selectize.js.git',
        version: 'v0.11.2',
        main: 'selectize.js',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
				reg: /^\/dist\/js\/selectize\.js$/,
                release: 'selectize.js'
            },
            {
                reg: /^\/dist\/css\/(.+\.css)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }];
})();
