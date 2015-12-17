'use strict';

module.exports = (function() {
    return [
{
  "name": "can-use-dom",
  "description": "Test if you can use dom in the current environment",
  "repos": "https://github.com/akiran/can-use-dom.git",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "0.1.0",
  "build": "rm package.json && npm install --prefix . can-use-dom@0.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/can-use-dom\/(.*\.js)$/i,
      "release": "$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
}
    ]
})();