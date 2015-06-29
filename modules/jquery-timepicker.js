'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jonthornton/jquery-timepicker.git',
        version: '1.7.0',
        name: 'jquery-timepicker',
        main: 'jquery.timepicker.js',
        dependencies: [
            "jquery@>=1.7"
        ],
        mapping: [
            {
                reg: /^\/jquery\.timepicker\.js$/,
                release: 'jquery.timepicker.js'
            },
            {
                reg: /^\/jquery\.timepicker\.css$/,
                release: 'jquery.timepicker.css'
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
    }, {
        version: '1.6.12',
        extend: '1.7.0'
    },
    {
        version: '1.6.11',
        extend: '1.7.0'
    },
    {
        version: '1.6.10',
        extend: '1.7.0'
    },
    {
        version: '1.6.9',
        extend: '1.7.0'
    }]
})();
