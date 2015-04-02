'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/yyx990803/vue',
        version: 'v0.11.5',
        description: 'Simple, Fast & Composable MVVM for building interative interfaces',
        name: "vue",
        main: "src/vue.js",
        mapping: [
            {
                reg: /^\/dist\/(.*\.js)/,
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
