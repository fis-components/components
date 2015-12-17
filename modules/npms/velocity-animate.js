'use strict';

module.exports = (function() {
    return [
{
  "name": "velocity-animate",
  "description": "Accelerated JavaScript animation.",
  "repos": "https://github.com/julianshapiro/velocity.git",
  "main": "velocity.js",
  "tag": "master",
  "dependencies": [
    "jquery@>= 1.4.3"
  ],
  "version": "1.2.1",
  "build": "rm package.json && npm install --prefix . velocity-animate@1.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/velocity-animate\/(.*\.js)$/i,
      "release": "$1"
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
  "name": "velocity-animate",
  "description": "Accelerated JavaScript animation.",
  "repos": "https://github.com/julianshapiro/velocity.git",
  "main": "velocity.js",
  "tag": "master",
  "dependencies": [
    "jquery@>= 1.4.3"
  ],
  "version": "1.2.2",
  "build": "rm package.json && npm install --prefix . velocity-animate@1.2.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/velocity-animate\/(.*\.js)$/i,
      "release": "$1"
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
  "name": "velocity-animate",
  "description": "Accelerated JavaScript animation.",
  "repos": "https://github.com/julianshapiro/velocity.git",
  "main": "velocity.js",
  "tag": "master",
  "dependencies": [
    "jquery@>= 1.4.3"
  ],
  "version": "1.2.3",
  "build": "rm package.json && npm install --prefix . velocity-animate@1.2.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/velocity-animate\/(.*\.js)$/i,
      "release": "$1"
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