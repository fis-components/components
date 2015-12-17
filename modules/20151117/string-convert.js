'use strict';

module.exports = (function() {
    return [
{
  "name": "string-convert",
  "description": "String convertions",
  "repos": "https://github.com/akiran/string-convert",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "0.1.0",
  "build": "rm package.json && npm install --prefix . string-convert@0.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/string-convert\/(.*\.js)$/i,
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
},

{
  "name": "string-convert",
  "description": "String convertions",
  "repos": "https://github.com/akiran/string-convert",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "0.2.0",
  "build": "rm package.json && npm install --prefix . string-convert@0.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/string-convert\/(.*\.js)$/i,
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
},

{
  "name": "string-convert",
  "description": "String convertions",
  "repos": "https://github.com/akiran/string-convert",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "0.2.1",
  "build": "rm package.json && npm install --prefix . string-convert@0.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/string-convert\/(.*\.js)$/i,
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