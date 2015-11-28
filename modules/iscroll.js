'use strict';

module.exports = (function() {
    return [

    {
        repos: 'https://github.com/cubiq/iscroll.git',
        version: '5.1.3',
        description: 'iScroll',
        main: 'iscroll.js',
        mapping: [
            {
                reg: /^\/build\/(.*)$/,
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
        ]
    }

    ]
})();
