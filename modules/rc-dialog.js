'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-dialog",
  "description": "dialog ui component for react",
  "repos": "https://github.com/react-component/dialog.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x",
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "5.2.2",
  "build": "rm package.json && npm install --prefix . rc-dialog@5.2.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/assets\/(.*)$/i,
      "release": "assets/$1"
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
  "name": "rc-dialog",
  "description": "dialog ui component for react",
  "repos": "https://github.com/react-component/dialog.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x",
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "5.3.0",
  "build": "rm package.json && npm install --prefix . rc-dialog@5.3.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/assets\/(.*)$/i,
      "release": "assets/$1"
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
  "name": "rc-dialog",
  "description": "dialog ui component for react",
  "repos": "https://github.com/react-component/dialog.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x",
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "5.3.1",
  "build": "rm package.json && npm install --prefix . rc-dialog@5.3.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-dialog\/assets\/(.*)$/i,
      "release": "assets/$1"
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