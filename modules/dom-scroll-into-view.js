'use strict';

module.exports = (function() {
    return [
{
  "name": "dom-scroll-into-view",
  "description": "scroll dom node into view automatically",
  "repos": "https://github.com/git@github.com:yiminghe/dom-scroll-into-view.git",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . dom-scroll-into-view@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/(.*\.js)$/i,
      "release": "$1"
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/assets\/(.*)$/i,
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
  "name": "dom-scroll-into-view",
  "description": "scroll dom node into view automatically",
  "repos": "https://github.com/git@github.com:yiminghe/dom-scroll-into-view.git",
  "tag": "master",
  "reposType": "npm",
  "version": "1.0.1",
  "build": "rm package.json && npm install --prefix . dom-scroll-into-view@1.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/(.*\.js)$/i,
      "release": "$1"
    },
    {
      "reg": /^\/node_modules\/dom-scroll-into-view\/assets\/(.*)$/i,
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