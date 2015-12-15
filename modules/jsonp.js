module.exports = (function() {
  return [{
    repos: "https://github.com/webmodules/jsonp.git",
    version: "0.2.0",
    description: "A simple JSONP implementation",
    name: "jsonp",
    main: "index.js",
    dependencies: [
    ],
    mapping: [
        
        {
            reg: /^\/index\.js$/,
            release: '$&'
        },
        {
            reg: /^\/Readme\.md$/i,
            release: '$&'
        },
        {
            reg: "*",
            release: false
        }
    ],


    // 去掉 debug 信息
    shim: {
        "index.js": {
            "replace": [
                {
                    from: "var debug = require('debug')('jsonp');",
                    to: ""
                },

                {
                    from: "debug('jsonp req \"%s\"', url);",
                    to: ""
                },

                {
                    from: "debug('jsonp got', data);",
                    to: ""
                }
            ]
        }
    }
  }]
})();
