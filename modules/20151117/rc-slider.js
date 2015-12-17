'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-slider",
  "description": "slider ui component for react",
  "repos": "https://github.com/react-component/slider.git",
  "main": "./lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.2.1",
    "object-assign@^4.0.1",
    "rc-tooltip@3.x",
    "rc-util@3.x"
  ],
  "version": "3.1.5",
  "build": "rm package.json && npm install --prefix . rc-slider@3.1.5",
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
  "name": "rc-slider",
  "description": "slider ui component for react",
  "repos": "https://github.com/react-component/slider.git",
  "main": "./lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.2.1",
    "object-assign@^4.0.1",
    "rc-tooltip@3.x",
    "rc-util@3.x"
  ],
  "version": "3.1.6",
  "build": "rm package.json && npm install --prefix . rc-slider@3.1.6",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-slider\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-slider\/assets\/(.*)$/i,
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
  "name": "rc-slider",
  "description": "slider ui component for react",
  "repos": "https://github.com/react-component/slider.git",
  "main": "./lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.2.1",
    "object-assign@^4.0.1",
    "rc-tooltip@3.x",
    "rc-util@3.x"
  ],
  "version": "3.2.0",
  "build": "rm package.json && npm install --prefix . rc-slider@3.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-slider\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-slider\/assets\/(.*)$/i,
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