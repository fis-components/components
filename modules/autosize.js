'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jackmoore/autosize',
        version: '3.0.4',
        description: 'Autosize is a small, stand-alone script to automatically adjust textarea height to fit text.http://www.jacklmoore.com/autosize/',
        name: 'autosize',
        main: 'autosize.js',
        mapping: [
            {
                reg: '/dest/autosize.js',
                release: 'autosize.js'
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
    },{
        version: '3.0.13',
        extend: '3.0.4'
    }]
})();
