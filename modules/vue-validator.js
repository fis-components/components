'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/vuejs/vue-validator',
        version: 'v1.0.7',
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
        version: 'v1.2.0',
        extend: 'v1.0.7',
        tag: 'v1.2.0',
        dependencies: [
            "vue@>=0.12.0"
        ]
    }

    ]
})();
