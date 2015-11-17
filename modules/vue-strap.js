'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/BelinChung/vue-strap',
        tag: 'master',
        version: 'v0.1.2',
        description: 'Bootstrap components built with Vue.js http://yuche.github.io/vue-strap/',
        name: 'vue-strap',
        main: 'vue-strap.js',
        mapping: [
            {
                reg: /^\/dist\/(.*)$/,
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
