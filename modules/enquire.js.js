'use strict';

module.exports = (function() {
    return [
{
  "name": "enquire.js",
  "description": "Awesome Media Queries in JavaScript",
  "repos": "https://github.com/WickyNilliams/enquire.js.git",
  "main": "enquire.js",
  "tag": "master",
  "reposType": "npm",
  "version": "2.1.1",
  "build": "rm package.json && npm install --prefix . enquire.js@2.1.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/enquire\.js\/dist\/(.*)$/i,
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