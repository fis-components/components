'use strict';

module.exports = (function() {
    return [
{
  "name": "disposables",
  "description": "Disposables let you safely compose resource disposal semantics",
  "repos": "https://github.com/gaearon/disposables.git",
  "main": "modules/index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . disposables@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/disposables\/modules\/(.*)$/i,
      "release": "modules/$1"
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
  "name": "disposables",
  "description": "Disposables let you safely compose resource disposal semantics",
  "repos": "https://github.com/gaearon/disposables.git",
  "main": "modules/index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.1",
  "build": "rm package.json && npm install --prefix . disposables@1.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/disposables\/modules\/(.*)$/i,
      "release": "modules/$1"
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