'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/aui/artTemplate',
        version: '3.0.1',
        description: '性能卓越的 js 模板引擎',
        name: 'artTemplate',
        main: 'artTemplate.js',

        mapping: [
            {
                reg: /^\/dist\/template-debug\.js$/,
                release: 'artTemplate.js'
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
