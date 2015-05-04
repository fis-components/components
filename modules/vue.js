'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/yyx990803/vue',
        version: '0.11.8',
        description: 'Simple, Fast & Composable MVVM for building interative interfaces',
        name: "vue",
        main: "vue.js",
        mapping: [
            {
                reg: /^\/dist\/(vue\.js)/,
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
    }]
})();
