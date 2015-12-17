'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-util",
  "description": "Common Utils For React Component",
  "repos": "https://github.com/react-component/util.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "add-dom-event-listener@1.x",
    "classnames@2.x",
    "shallowequal@0.2.x",
    "util-deprecate@1.x"
  ],
  "version": "3.1.0",
  "build": "rm package.json && npm install --prefix . rc-util@3.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-util\/lib\/(.*)$/i,
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
  "name": "rc-util",
  "description": "Common Utils For React Component",
  "repos": "https://github.com/react-component/util.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "add-dom-event-listener@1.x",
    "classnames@2.x",
    "shallowequal@0.2.x",
    "util-deprecate@1.x"
  ],
  "version": "3.1.1",
  "build": "rm package.json && npm install --prefix . rc-util@3.1.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
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
  "name": "rc-util",
  "description": "Common Utils For React Component",
  "repos": "https://github.com/react-component/util.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "add-dom-event-listener@1.x",
    "classnames@2.x",
    "shallowequal@0.2.x",
    "util-deprecate@1.x"
  ],
  "version": "3.1.2",
  "build": "rm package.json && npm install --prefix . rc-util@3.1.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-util\/lib\/(.*)$/i,
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