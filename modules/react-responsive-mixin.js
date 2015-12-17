'use strict';

module.exports = (function() {
    return [
{
  "name": "react-responsive-mixin",
  "description": "Mixin to develop responsive react components",
  "repos": "https://github.com/akiran/react-responsive-mixin",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "can-use-dom@^0.1.0",
    "enquire.js@^2.1.1",
    "json2mq@^0.2.0"
  ],
  "version": "0.3.3",
  "build": "rm package.json && npm install --prefix . react-responsive-mixin@0.3.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-responsive-mixin\/(.*\.js)$/i,
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
  "name": "react-responsive-mixin",
  "description": "Mixin to develop responsive react components",
  "repos": "https://github.com/akiran/react-responsive-mixin",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "can-use-dom@^0.1.0",
    "enquire.js@^2.1.1",
    "json2mq@^0.2.0"
  ],
  "version": "0.3.4",
  "build": "rm package.json && npm install --prefix . react-responsive-mixin@0.3.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-responsive-mixin\/(.*\.js)$/i,
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
  "name": "react-responsive-mixin",
  "description": "Mixin to develop responsive react components",
  "repos": "https://github.com/akiran/react-responsive-mixin",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "can-use-dom@^0.1.0",
    "enquire.js@^2.1.1",
    "json2mq@^0.2.0"
  ],
  "version": "0.3.5",
  "build": "rm package.json && npm install --prefix . react-responsive-mixin@0.3.5",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-responsive-mixin\/(.*\.js)$/i,
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