'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/vuejs/vue-validator',
        version: 'v1.0.2',
        description: 'Validator component for VueJS',
        name: 'vue-validator',
        main: 'vue-validator.js',
        dependencies: [
            "vue@>=0.11.2"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-validator\.js)/,
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
    },

    {
        repos: 'https://github.com/vuejs/vue-validator',
        version: 'v1.0.3',
        description: 'Validator component for VueJS',
        name: 'vue-validator',
        main: 'vue-validator.js',
        dependencies: [
            "vue@>=0.11.2"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-validator\.js)/,
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
    },

    {
        repos: 'https://github.com/vuejs/vue-validator',
        version: 'v1.0.4',
        description: 'Validator component for VueJS',
        name: 'vue-validator',
        main: 'vue-validator.js',
        dependencies: [
            "vue@>=0.11.2"
        ],
        mapping: [
            {
                reg: /^\/dist\/(vue-validator\.js)/,
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
