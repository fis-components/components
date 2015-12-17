'use strict';

module.exports = (function() {
    return [
{
  "name": "semver",
  "description": "The semantic version parser used by npm.",
  "repos": "https://github.com/npm/node-semver.git",
  "main": "semver.js",
  "tag": "master",
  "reposType": "npm",
  "version": "5.0.2",
  "build": "rm package.json && npm install --prefix . semver@5.0.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/semver\/(.*\.js)$/i,
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
  "name": "semver",
  "description": "The semantic version parser used by npm.",
  "repos": "https://github.com/npm/node-semver.git",
  "main": "semver.js",
  "tag": "master",
  "reposType": "npm",
  "version": "5.0.3",
  "build": "rm package.json && npm install --prefix . semver@5.0.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/semver\/(.*\.js)$/i,
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
  "name": "semver",
  "description": "The semantic version parser used by npm.",
  "repos": "https://github.com/npm/node-semver.git",
  "main": "semver.js",
  "tag": "master",
  "reposType": "npm",
  "version": "5.1.0",
  "build": "rm package.json && npm install --prefix . semver@5.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/semver\/(.*\.js)$/i,
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