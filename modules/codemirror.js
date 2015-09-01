'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/codemirror/codemirror',
        version: '5.6.0',
        description: 'In-browser code editor http://codemirror.net/',
        name: 'codemirror',
        main: 'codemirror.js',
        mapping: [
            {
                reg: /^\/lib\/(.*\.(css|js))$/,
                release: '$&'
            },
            {
                reg: /^\/mode\/(.*\.(css|js))$/,
                release: '$&'
            },
            {
                reg: /^\/addon\/(.*\.(css|js))$/,
                release: '$&'
            },
            {
                reg: /^\/theme\/(.*)$/,
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
        ]
    }]
})();
