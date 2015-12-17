'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-pagination",
  "description": "pagination ui component for react",
  "repos": "https://github.com/react-component/pagination.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.4-beta",
  "build": "rm package.json && npm install --prefix . rc-pagination@1.3.4-beta",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/assets\/(.*)$/i,
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
  "name": "rc-pagination",
  "description": "pagination ui component for react",
  "repos": "https://github.com/react-component/pagination.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.4",
  "build": "rm package.json && npm install --prefix . rc-pagination@1.3.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/assets\/(.*)$/i,
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
  "name": "rc-pagination",
  "description": "pagination ui component for react",
  "repos": "https://github.com/react-component/pagination.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.5",
  "build": "rm package.json && npm install --prefix . rc-pagination@1.3.5",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-pagination\/assets\/(.*)$/i,
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