'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/makeusabrew/bootbox',
        version: 'v4.4.0',
        description: 'Wrappers for JavaScript alert(), confirm() and other flexible dialogs using the Bootstrap framework',
        name: 'bootbox',
        main: 'bootbox.js',
        mapping: [
            {
                reg: /^\/bootbox\.js$/,
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
