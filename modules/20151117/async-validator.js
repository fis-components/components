'use strict';

module.exports = (function() {
    return [
{
  "name": "async-validator",
  "description": "validate form asynchronous",
  "repos": "https://github.com/yiminghe/async-validator.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.4",
  "build": "rm package.json && npm install --prefix . async-validator@1.3.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/async-validator\/lib\/(.*)$/i,
      "release": "lib/$1"
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
  "name": "async-validator",
  "description": "validate form asynchronous",
  "repos": "https://github.com/yiminghe/async-validator.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.5",
  "build": "rm package.json && npm install --prefix . async-validator@1.3.5",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/async-validator\/lib\/(.*)$/i,
      "release": "lib/$1"
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
  "name": "async-validator",
  "description": "validate form asynchronous",
  "repos": "https://github.com/yiminghe/async-validator.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.7",
  "build": "rm package.json && npm install --prefix . async-validator@1.3.7",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/async-validator\/lib\/(.*)$/i,
      "release": "lib/$1"
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