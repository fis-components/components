'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-select",
  "description": "select ui component for react",
  "repos": "https://github.com/react-component/select.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "rc-menu@4.x",
    "rc-trigger@1.x",
    "rc-util@3.x"
  ],
  "version": "5.3.0",
  "build": "rm package.json && npm install --prefix . rc-select@5.3.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-select\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-select\/assets\/(.*)$/i,
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
  "name": "rc-select",
  "description": "select ui component for react",
  "repos": "https://github.com/react-component/select.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "rc-menu@4.x",
    "rc-trigger@1.x",
    "rc-util@3.x"
  ],
  "version": "5.3.1",
  "build": "rm package.json && npm install --prefix . rc-select@5.3.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-select\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-select\/assets\/(.*)$/i,
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
  "name": "rc-select",
  "description": "select ui component for react",
  "repos": "https://github.com/react-component/select.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "rc-menu@4.x",
    "rc-trigger@1.x",
    "rc-util@3.x"
  ],
  "version": "5.4.0",
  "build": "rm package.json && npm install --prefix . rc-select@5.4.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-select\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-select\/assets\/(.*)$/i,
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