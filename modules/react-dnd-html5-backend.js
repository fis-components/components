'use strict';

module.exports = (function() {
    return [
{
  "name": "react-dnd-html5-backend",
  "description": "HTML5 backend for React DnD",
  "repos": "https://github.com/gaearon/react-dnd-html5-backend.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash@^3.10.1"
  ],
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . react-dnd-html5-backend@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-dnd-html5-backend\/lib\/(.*)$/i,
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
  "name": "react-dnd-html5-backend",
  "description": "HTML5 backend for React DnD",
  "repos": "https://github.com/gaearon/react-dnd-html5-backend.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash@^3.10.1"
  ],
  "version": "2.0.0",
  "build": "rm package.json && npm install --prefix . react-dnd-html5-backend@2.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-dnd-html5-backend\/lib\/(.*)$/i,
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