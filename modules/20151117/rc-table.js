'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-table",
  "description": "table ui component for react",
  "repos": "https://github.com/react-component/table.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "3.6.0",
  "build": "rm package.json && npm install --prefix . rc-table@3.6.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-table\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-table\/assets\/(.*)$/i,
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
  "name": "rc-table",
  "description": "table ui component for react",
  "repos": "https://github.com/react-component/table.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "3.6.1",
  "build": "rm package.json && npm install --prefix . rc-table@3.6.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-table\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-table\/assets\/(.*)$/i,
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
  "name": "rc-table",
  "description": "table ui component for react",
  "repos": "https://github.com/react-component/table.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "3.6.2",
  "build": "rm package.json && npm install --prefix . rc-table@3.6.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-table\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-table\/assets\/(.*)$/i,
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