'use strict';

module.exports = (function() {
    return [
{
  "name": "object-assign",
  "description": "ES6 Object.assign() ponyfill",
  "repos": "https://github.com/sindresorhus/object-assign.git",
  "tag": "master",
  "reposType": "npm",
  "version": "3.0.0",
  "build": "rm package.json && npm install --prefix . object-assign@3.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/object-assign\/(.*\.js)$/i,
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
  "name": "object-assign",
  "description": "ES6 Object.assign() ponyfill",
  "repos": "https://github.com/sindresorhus/object-assign.git",
  "tag": "master",
  "reposType": "npm",
  "version": "4.0.0",
  "build": "rm package.json && npm install --prefix . object-assign@4.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/object-assign\/(.*\.js)$/i,
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
  "name": "object-assign",
  "description": "ES6 Object.assign() ponyfill",
  "repos": "https://github.com/sindresorhus/object-assign.git",
  "tag": "master",
  "reposType": "npm",
  "version": "4.0.1",
  "build": "rm package.json && npm install --prefix . object-assign@4.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/object-assign\/(.*\.js)$/i,
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
