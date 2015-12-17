'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-tree",
  "description": "tree ui component for react",
  "repos": "https://github.com/react-component/tree.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.1",
    "object-assign@4.x",
    "rc-animate@2.x"
  ],
  "version": "0.20.0",
  "build": "rm package.json && npm install --prefix . rc-tree@0.20.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-tree\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-tree\/assets\/(.*)$/i,
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
  "name": "rc-tree",
  "description": "tree ui component for react",
  "repos": "https://github.com/react-component/tree.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.1",
    "object-assign@4.x",
    "rc-animate@2.x"
  ],
  "version": "0.20.1",
  "build": "rm package.json && npm install --prefix . rc-tree@0.20.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-tree\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-tree\/assets\/(.*)$/i,
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
  "name": "rc-tree",
  "description": "tree ui component for react",
  "repos": "https://github.com/react-component/tree.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.1",
    "object-assign@4.x",
    "rc-animate@2.x"
  ],
  "version": "0.20.2",
  "build": "rm package.json && npm install --prefix . rc-tree@0.20.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-tree\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-tree\/assets\/(.*)$/i,
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