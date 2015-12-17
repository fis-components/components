'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-menu",
  "description": "menu ui component for react",
  "repos": "https://github.com/react-component/menu.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "dom-scroll-into-view@1.x",
    "object-assign@4.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "4.8.1",
  "build": "rm package.json && npm install --prefix . rc-menu@4.8.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-menu\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-menu\/assets\/(.*)$/i,
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
  "name": "rc-menu",
  "description": "menu ui component for react",
  "repos": "https://github.com/react-component/menu.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "dom-scroll-into-view@1.x",
    "object-assign@4.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "4.8.2",
  "build": "rm package.json && npm install --prefix . rc-menu@4.8.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-menu\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-menu\/assets\/(.*)$/i,
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
  "name": "rc-menu",
  "description": "menu ui component for react",
  "repos": "https://github.com/react-component/menu.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "dom-scroll-into-view@1.x",
    "object-assign@4.x",
    "rc-animate@2.x",
    "rc-util@3.x"
  ],
  "version": "4.8.3",
  "build": "rm package.json && npm install --prefix . rc-menu@4.8.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-menu\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-menu\/assets\/(.*)$/i,
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