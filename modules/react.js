'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/facebook/react.git',
            version: 'v0.13.3',
            name: 'react',
            main: 'react.js',
            build: 'rm package.json && npm install --prefix . react@0.13.3',
            mapping: [
                {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/react\/dist\/(.*)$/,
                    release: '$1'
                },

                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: /^\/package\.json$/i,
                    release: '.hook.js'
                },
                {
                    reg: '*',
                    release: false
                }
            ],
            umd2commonjs: false,
            hook: '.hook.js',
            shim: {
                '.hook.js': {
                    content: [
                        "var path = require('path');",
"",
"module.exports = function(json, files) {",
"  var hasAddons = false;",
"",
"  Object.keys(files).every(function(subpath) {",
"    var cName = path.basename(path.dirname(subpath));",
"",
"    // some thing like `react-addons-create-fragment`",
"    if (cName.substring(0, 13) === 'react-addons-') {",
"      hasAddons = true;",
"      return false;",
"    }",
"",
"    return true;",
"  });",
"",
"  // 自动切换到 react-with-addons 如果依赖列表中有 react-addons 的话。",
"  // 实在不想再把 react 给拆了。",
"  if (hasAddons) {",
"    json.main = 'react-with-addons.js';",
"  }",
"};"
                    ].join('\n')
                }
            }
        },

        {
            extend: 'v0.13.3',
            version: 'v0.14.2',
            build: 'rm package.json && npm install --prefix . react@0.14.2',
        },

        {
            extend: 'v0.13.3',
            version: 'v0.14.3',
            build: 'rm package.json && npm install --prefix . react@0.14.3',
        }
    ]
})();
