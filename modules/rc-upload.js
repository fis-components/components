'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-upload",
  "description": "upload ui component for react",
  "repos": "https://github.com/react-component/upload.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "warning@2.x"
  ],
  "version": "1.6.6",
  "build": "rm package.json && npm install --prefix . rc-upload@1.6.6",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-upload\/lib\/(.*)$/i,
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
  "name": "rc-upload",
  "description": "upload ui component for react",
  "repos": "https://github.com/react-component/upload.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "warning@2.x"
  ],
  "version": "1.6.7-beta",
  "build": "rm package.json && npm install --prefix . rc-upload@1.6.7-beta",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
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
  "name": "rc-upload",
  "description": "upload ui component for react",
  "repos": "https://github.com/react-component/upload.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "warning@2.x"
  ],
  "version": "1.7.0",
  "build": "rm package.json && npm install --prefix . rc-upload@1.7.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-upload\/lib\/(.*)$/i,
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