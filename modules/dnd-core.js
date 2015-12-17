'use strict';

module.exports = (function() {
    return [
{
  "name": "dnd-core",
  "description": "Drag and drop sans the GUI",
  "repos": "https://github.com/gaearon/dnd-core.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "lodash@^3.10.1",
    "redux@^3.0.0"
  ],
  "version": "1.2.0",
  "build": "rm package.json && npm install --prefix . dnd-core@1.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dnd-core\/lib\/(.*)$/i,
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
  "name": "dnd-core",
  "description": "Drag and drop sans the GUI",
  "repos": "https://github.com/gaearon/dnd-core.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "lodash@^3.10.1",
    "redux@^3.0.0"
  ],
  "version": "1.2.1",
  "build": "rm package.json && npm install --prefix . dnd-core@1.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dnd-core\/lib\/(.*)$/i,
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
  "name": "dnd-core",
  "description": "Drag and drop sans the GUI",
  "repos": "https://github.com/gaearon/dnd-core.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "invariant@^2.0.0",
    "lodash@^3.10.1",
    "redux@^3.0.0"
  ],
  "version": "1.2.2",
  "build": "rm package.json && npm install --prefix . dnd-core@1.2.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/dnd-core\/lib\/(.*)$/i,
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