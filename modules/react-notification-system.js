'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/igorprado/react-notification-system.git',
            version: '0.2.6',
            name: 'react-notification-system',
            main: 'NotificationSystem.js',
            build: 'rm package.json && npm install --prefix . react-notification-system@0.2.6',
            dependencies: [
                "object-assign@^4.0.1"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react-notification-system\/dist\/(.*)$/,
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
