'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-notification",
  "description": "notification ui component for react",
  "repos": "https://github.com/react-component/notification.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "1.1.0",
  "build": "rm package.json && npm install --prefix . rc-notification@1.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-notification\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-notification\/assets\/(.*)$/i,
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
  "name": "rc-notification",
  "description": "notification ui component for react",
  "repos": "https://github.com/react-component/notification.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "1.2.0",
  "build": "rm package.json && npm install --prefix . rc-notification@1.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-notification\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-notification\/assets\/(.*)$/i,
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
  "name": "rc-notification",
  "description": "notification ui component for react",
  "repos": "https://github.com/react-component/notification.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "1.3.0",
  "build": "rm package.json && npm install --prefix . rc-notification@1.3.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-notification\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-notification\/assets\/(.*)$/i,
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