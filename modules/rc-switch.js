'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-switch",
  "description": "switch ui component for react",
  "repos": "https://github.com/react-component/switch.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-util@3.x"
  ],
  "version": "1.2.1",
  "build": "rm package.json && npm install --prefix . rc-switch@1.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-switch\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-switch\/assets\/(.*)$/i,
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
  "name": "rc-switch",
  "description": "switch ui component for react",
  "repos": "https://github.com/react-component/switch.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-util@3.x"
  ],
  "version": "1.3.0",
  "build": "rm package.json && npm install --prefix . rc-switch@1.3.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-switch\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-switch\/assets\/(.*)$/i,
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
  "name": "rc-switch",
  "description": "switch ui component for react",
  "repos": "https://github.com/react-component/switch.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-util@3.x"
  ],
  "version": "1.3.1",
  "build": "rm package.json && npm install --prefix . rc-switch@1.3.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-switch\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-switch\/assets\/(.*)$/i,
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