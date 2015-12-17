'use strict';

module.exports = (function() {
    return [
{
  "name": "util-deprecate",
  "description": "The Node.js `util.deprecate()` function with browser support",
  "repos": "https://github.com/TooTallNate/util-deprecate.git",
  "main": "browser.js",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . util-deprecate@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/util-deprecate\/(browser\.js)$/i,
      "release": "$1"
    }
  ]
},

{
  "name": "util-deprecate",
  "description": "The Node.js `util.deprecate()` function with browser support",
  "repos": "https://github.com/TooTallNate/util-deprecate.git",
  "main": "browser.js",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.1",
  "build": "rm package.json && npm install --prefix . util-deprecate@1.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/util-deprecate\/(browser\.js)$/i,
      "release": "$1"
    }
  ]
},

{
  "name": "util-deprecate",
  "description": "The Node.js `util.deprecate()` function with browser support",
  "repos": "https://github.com/TooTallNate/util-deprecate.git",
  "main": "browser.js",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.2",
  "build": "rm package.json && npm install --prefix . util-deprecate@1.0.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/util-deprecate\/(browser\.js)$/i,
      "release": "$1"
    }
  ]
}
    ]
})();