'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-radio",
  "description": "radio ui component for react",
  "repos": "https://github.com/react-component/radio.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-checkbox@1.x"
  ],
  "version": "1.0.3",
  "build": "rm package.json && npm install --prefix . rc-radio@1.0.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-radio\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-radio\/assets\/(.*)$/i,
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
  "name": "rc-radio",
  "description": "radio ui component for react",
  "repos": "https://github.com/react-component/radio.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-checkbox@1.x"
  ],
  "version": "1.0.4",
  "build": "rm package.json && npm install --prefix . rc-radio@1.0.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-radio\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-radio\/assets\/(.*)$/i,
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
  "name": "rc-radio",
  "description": "radio ui component for react",
  "repos": "https://github.com/react-component/radio.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "rc-checkbox@1.x"
  ],
  "version": "2.0.0",
  "build": "rm package.json && npm install --prefix . rc-radio@2.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-radio\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-radio\/assets\/(.*)$/i,
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