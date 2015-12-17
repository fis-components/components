'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-steps",
  "description": "steps ui component for react",
  "repos": "https://github.com/react-component/steps.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.3",
  "build": "rm package.json && npm install --prefix . rc-steps@1.3.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-steps\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-steps\/assets\/(.*)$/i,
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
  "name": "rc-steps",
  "description": "steps ui component for react",
  "repos": "https://github.com/react-component/steps.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.4.0",
  "build": "rm package.json && npm install --prefix . rc-steps@1.4.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-steps\/lib\/(.*)$/i,
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
  "name": "rc-steps",
  "description": "steps ui component for react",
  "repos": "https://github.com/react-component/steps.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.4.1",
  "build": "rm package.json && npm install --prefix . rc-steps@1.4.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-steps\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-steps\/assets\/(.*)$/i,
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