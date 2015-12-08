'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/callemall/material-ui.git',
            version: '0.14.0-rc1',
            name: 'material-ui',
            main: 'lib/index.js',
            build: 'rm package.json && npm install --prefix . material-ui@0.14.0-rc1',
            dependencies: [
                "inline-style-prefixer@^0.5.2",
                "lodash.throttle@~3.0.4",
                "react-addons-transition-group@^0.14.0",
                "react-addons-update@^0.14.0",
                "react-addons-create-fragment@^0.14.0",
                "react-addons-pure-render-mixin@^0.14.0",
                "warning@^2.1.0"
            ],
            mapping: [
                {
                    reg: /^\/node_modules\/material\-ui\/lib\/(.*)$/,
                    release: 'lib/$1'
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
        }, {
            version: 'v0.13.4',
            extend: '0.14.0-rc1',
            build: 'rm package.json && npm install --prefix . material-ui@0.13.4'
        }
    ]
})();
