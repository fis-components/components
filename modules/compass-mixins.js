'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/Igosuki/compass-mixins.git',
        version: '1.0.2',
        description: 'A collection of compass\' stylesheet for bower dependencies and libsass',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/lib\/(.*?)$/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }, {
        version: 'v0.12.7',
        extend: '1.0.2'
    }];
})();
