'use strict';

module.exports = (function() {
    return [
{
  "name": "react-router",
  "description": "A complete routing library for React.js",
  "repos": "https://github.com/rackt/react-router.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "warning@^2.0.0"
  ],
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . react-router@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-router\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "react-router",
  "description": "A complete routing library for React.js",
  "repos": "https://github.com/rackt/react-router.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "warning@^2.0.0"
  ],
  "version": "1.0.1",
  "build": "rm package.json && npm install --prefix . react-router@1.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-router\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "react-router",
  "description": "A complete routing library for React.js",
  "repos": "https://github.com/rackt/react-router.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "warning@^2.0.0"
  ],
  "version": "1.0.3",
  "build": "rm package.json && npm install --prefix . react-router@1.0.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-router\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
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
