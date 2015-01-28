'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/davgothic/AjaxFileUpload.git',
        version: '0.1.0',
        tag: 'master',
        name: 'jquery-ajaxfileupload',
        main: 'jquery.ajaxfileupload.js',
        dependencies: [
            "jquery@>=1.6.1"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\.ajaxfileupload\.js$/,
                release: 'jquery.ajaxfileupload.js'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            "jquery.ajaxfileupload.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
