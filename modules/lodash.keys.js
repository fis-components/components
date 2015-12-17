'use strict';

module.exports = (function() {
    return [
{
  "name": "lodash.keys",
  "description": "The modern build of lodash’s `_.keys` as a module.",
  "repos": "https://github.com/lodash/lodash.git",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash._getnative@^3.0.0",
    "lodash.isarguments@^3.0.0",
    "lodash.isarray@^3.0.0"
  ],
  "version": "3.1.0",
  "build": "rm package.json && npm install --prefix . lodash.keys@3.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\.keys\/(.*\.js)$/i,
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
  "name": "lodash.keys",
  "description": "The modern build of lodash’s `_.keys` as a module.",
  "repos": "https://github.com/lodash/lodash.git",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash._getnative@^3.0.0",
    "lodash.isarguments@^3.0.0",
    "lodash.isarray@^3.0.0"
  ],
  "version": "3.1.1",
  "build": "rm package.json && npm install --prefix . lodash.keys@3.1.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\.keys\/(.*\.js)$/i,
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
  "name": "lodash.keys",
  "description": "The modern build of lodash’s `_.keys` as a module.",
  "repos": "https://github.com/lodash/lodash.git",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash._getnative@^3.0.0",
    "lodash.isarguments@^3.0.0",
    "lodash.isarray@^3.0.0"
  ],
  "version": "3.1.2",
  "build": "rm package.json && npm install --prefix . lodash.keys@3.1.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\.keys\/(.*\.js)$/i,
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