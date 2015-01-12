'use strict';

module.exports = (function() {
    return [{
        name: "webuploader",
        main: "webuploader.js",
        repos: 'https://github.com/fex-team/webuploader.git',
        version: '0.1.5',
        description: 'It\'s a new file uploader solution! http://fex.baidu.com/webuploader',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt dist',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/Uploader\.swf$/i,
                release: 'webuploader.swf'
            },
            {
                reg: /^\/css\/webuploader\.css$/i,
                release: 'webuploader.css'
            },
            {
                reg: /^\/src\/(.*?)$/,
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
    }];
})();
