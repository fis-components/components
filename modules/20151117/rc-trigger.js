'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-trigger",
  "description": "base abstract trigger component for react",
  "repos": "https://github.com/react-component/trigger.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x",
    "object-assign@4.x"
  ],
  "version": "1.0.4",
  "build": "rm package.json && npm install --prefix . rc-trigger@1.0.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/assets\/(.*)$/i,
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
  "name": "rc-trigger",
  "description": "base abstract trigger component for react",
  "repos": "https://github.com/react-component/trigger.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x",
    "object-assign@4.x"
  ],
  "version": "1.0.5",
  "build": "rm package.json && npm install --prefix . rc-trigger@1.0.5",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/assets\/(.*)$/i,
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
  "name": "rc-trigger",
  "description": "base abstract trigger component for react",
  "repos": "https://github.com/react-component/trigger.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-align@2.x",
    "rc-animate@2.x",
    "rc-util@3.x",
    "object-assign@4.x"
  ],
  "version": "1.0.6",
  "build": "rm package.json && npm install --prefix . rc-trigger@1.0.6",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-trigger\/assets\/(.*)$/i,
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