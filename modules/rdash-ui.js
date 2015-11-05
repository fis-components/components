'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/rdash/rdash-ui.git',
        version: '1.0.1',
        description: 'Responsive, bloat free, bootstrap powered admin style dashboard!',
        name: 'rdash-ui',
        main: 'css/rdash.css',
        mapping: [

            {
                reg: /\bmin\b/i,
                release: false
            },

            {
                reg: /^\/dist\/(.*)$/,
                release: '$1'
            },

            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
