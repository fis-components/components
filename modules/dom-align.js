'use strict';

module.exports = (function() {
    return [
{
  "name": "dom-align",
  "description": "Align DOM Node Flexibly ",
  "repos": "https://github.com/yiminghe/dom-align.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.2.0",
  "build": "rm package.json && npm install --prefix . dom-align@1.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dom-align\/lib\/(.*)$/i,
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
  "name": "dom-align",
  "description": "Align DOM Node Flexibly ",
  "repos": "https://github.com/yiminghe/dom-align.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.2.1",
  "build": "rm package.json && npm install --prefix . dom-align@1.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dom-align\/lib\/(.*)$/i,
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
  "name": "dom-align",
  "description": "Align DOM Node Flexibly ",
  "repos": "https://github.com/yiminghe/dom-align.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "version": "1.3.0",
  "build": "rm package.json && npm install --prefix . dom-align@1.3.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dom-align\/lib\/(.*)$/i,
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
}
    ]
})();