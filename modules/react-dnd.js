'use strict';

module.exports = (function() {
    return [
{
  "name": "react-dnd",
  "description": "Drag and Drop for React",
  "repos": "https://github.com/gaearon/react-dnd.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "disposables@^1.0.1",
    "dnd-core@^1.2.2",
    "invariant@^2.1.0",
    "lodash@^3.10.1"
  ],
  "version": "2.0.0",
  "build": "rm package.json && npm install --prefix . react-dnd@2.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-dnd\/lib\/(.*)$/i,
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
  "name": "react-dnd",
  "description": "Drag and Drop for React",
  "repos": "https://github.com/gaearon/react-dnd.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "disposables@^1.0.1",
    "dnd-core@^1.2.2",
    "invariant@^2.1.0",
    "lodash@^3.10.1"
  ],
  "version": "2.0.1",
  "build": "rm package.json && npm install --prefix . react-dnd@2.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-dnd\/lib\/(.*)$/i,
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
  "name": "react-dnd",
  "description": "Drag and Drop for React",
  "repos": "https://github.com/gaearon/react-dnd.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "disposables@^1.0.1",
    "dnd-core@^1.2.2",
    "invariant@^2.1.0",
    "lodash@^3.10.1"
  ],
  "version": "2.0.2",
  "build": "rm package.json && npm install --prefix . react-dnd@2.0.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-dnd\/lib\/(.*)$/i,
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