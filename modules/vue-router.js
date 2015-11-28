'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/vuejs/vue-router',
        version: '0.7.7',
        description: 'The official router for Vue.js 0.12+',
        name: 'vue-router',
        main: 'vue-router.js',
        dependencies: [
            "vue@>=0.12.0"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-router\.js)/,
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
        version: '0.7.7'
    }]
})();
