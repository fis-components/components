'use strict';

module.exports = (function() {
    return [
{
  "name": "shallowequal",
  "description": "Like lodash isEqual but for shallow equal",
  "repos": "https://github.com/dashed/shallowequal.git",
  "main": "modules/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash.keys@^3.1.2"
  ],
  "version": "0.2.0",
  "build": "rm package.json && npm install --prefix . shallowequal@0.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/shallowequal\/modules\/(.*)$/i,
      "release": "modules/$1"
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
  "name": "shallowequal",
  "description": "Like lodash isEqual but for shallow equal",
  "repos": "https://github.com/dashed/shallowequal.git",
  "main": "modules/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash.keys@^3.1.2"
  ],
  "version": "0.2.1",
  "build": "rm package.json && npm install --prefix . shallowequal@0.2.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/shallowequal\/modules\/(.*)$/i,
      "release": "modules/$1"
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
  "name": "shallowequal",
  "description": "Like lodash isEqual but for shallow equal",
  "repos": "https://github.com/dashed/shallowequal.git",
  "main": "modules/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "lodash.keys@^3.1.2"
  ],
  "version": "0.2.2",
  "build": "rm package.json && npm install --prefix . shallowequal@0.2.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/shallowequal\/modules\/(.*)$/i,
      "release": "modules/$1"
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