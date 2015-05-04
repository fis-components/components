'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/Automattic/socket.io-client',
        version: '1.3.5',
        description: 'Realtime application framework (client)',
        name: 'socket.io',
        main: 'socket.io.js',
        mapping: [
            {
                reg: '/socket.io.js',
                release: 'socket.io.js'
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
