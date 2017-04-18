'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/reflux/refluxjs.git',
            version: 'v0.3.0',
            name: 'reflux',
            main: 'reflux.js',
            mapping: [
                {
                    reg: /^\/dist\/(.*)$/,
                    release: '$1'
                },

                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();