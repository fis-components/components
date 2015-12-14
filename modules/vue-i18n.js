'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/kazupon/vue-i18n',
        version: 'v2.1.0',
        description: 'Internationalization plugin of Vue.js',
        name: 'vue-i18n',
        main: 'vue-i18n.js',
        dependencies: [
            "vue@>=0.12.0"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-i18n\.js)/,
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
    },{
        version: 'v2.3.3',
        extend: 'v2.1.0'
    }]
})();
