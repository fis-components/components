'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/select2/select2',
        version: '4.0.0',
        tag: '4.0.0-rc.2',
        description: 'Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.https://select2.github.io/',
        name: 'select2',
        main: 'select2.js',
        dependencies: [
            "jquery@>=1.7.0"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/js\/(.*)$/,
                release: '$1'
            },
            {
                reg: '/dist/css/select2.css',
                release: 'select2.css'
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
            'select2.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
