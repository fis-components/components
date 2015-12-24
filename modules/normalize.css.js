'use strict';

module.exports = (function() {
    return [
{
  "name": "normalize.css",
  "description": "Normalize.css as a node packaged module",
  "repos": "https://github.com/necolas/normalize.css.git",
  "main": "normalize.css",
  "tag": "master",
  "reposType": "npm",
  "version": "3.0.1",
  "build": "rm package.json && npm install --prefix . normalize.css@3.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/normalize\.css\/(.*\.js)$/i,
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
  "name": "normalize.css",
  "description": "Normalize.css as a node packaged module",
  "repos": "https://github.com/necolas/normalize.css.git",
  "main": "normalize.css",
  "tag": "master",
  "reposType": "npm",
  "version": "3.0.2",
  "build": "rm package.json && npm install --prefix . normalize.css@3.0.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/normalize\.css\/(.*\.js)$/i,
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
  "name": "normalize.css",
  "description": "Normalize.css as a node packaged module",
  "repos": "https://github.com/necolas/normalize.css.git",
  "main": "normalize.css",
  "tag": "master",
  "reposType": "npm",
  "version": "3.0.3",
  "build": "rm package.json && npm install --prefix . normalize.css@3.0.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/normalize\.css\/(.*\.js)$/i,
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
