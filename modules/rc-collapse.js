'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-collapse",
  "description": "rc-collapse ui component for react",
  "repos": "https://github.com/react-component/collapse.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "velocity-animate@1.x"
  ],
  "version": "1.4.1",
  "build": "rm package.json && npm install --prefix . rc-collapse@1.4.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-collapse\/lib\/(.*)$/i,
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
  "name": "rc-collapse",
  "description": "rc-collapse ui component for react",
  "repos": "https://github.com/react-component/collapse.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "velocity-animate@1.x"
  ],
  "version": "1.4.2",
  "build": "rm package.json && npm install --prefix . rc-collapse@1.4.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-collapse\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-collapse\/assets\/(.*)$/i,
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
  "name": "rc-collapse",
  "description": "rc-collapse ui component for react",
  "repos": "https://github.com/react-component/collapse.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "rc-animate@2.x",
    "velocity-animate@1.x"
  ],
  "version": "1.4.3",
  "build": "rm package.json && npm install --prefix . rc-collapse@1.4.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-collapse\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-collapse\/assets\/(.*)$/i,
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
