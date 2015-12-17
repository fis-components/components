'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-align",
  "description": "align ui component for react",
  "repos": "https://github.com/react-component/align.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "dom-align@1.x",
    "rc-util@3.x"
  ],
  "version": "2.0.0",
  "build": "rm package.json && npm install --prefix . rc-align@2.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-align\/lib\/(.*)$/i,
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
  "name": "rc-align",
  "description": "align ui component for react",
  "repos": "https://github.com/react-component/align.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "dom-align@1.x",
    "rc-util@3.x"
  ],
  "version": "2.1.0",
  "build": "rm package.json && npm install --prefix . rc-align@2.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-align\/lib\/(.*)$/i,
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
  "name": "rc-align",
  "description": "align ui component for react",
  "repos": "https://github.com/react-component/align.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "dom-align@1.x",
    "rc-util@3.x"
  ],
  "version": "2.2.0",
  "build": "rm package.json && npm install --prefix . rc-align@2.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-align\/lib\/(.*)$/i,
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