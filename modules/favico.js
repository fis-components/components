'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ejci/favico.js',
        version: '0.3.9',
        description: 'Make use of your favicon with badges, images or videos http://lab.ejci.net/favico.js/',
        name: 'favico',
        main: 'favico.js',
        mapping: [
            {
                reg: /^\/favico\.js$/,
                release: '$&'
            },
            {
                reg: /^\/readme\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
