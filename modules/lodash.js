'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/lodash/lodash',
        version: '3.5.0',
        description: 'A JavaScript utility library delivering consistency, modularity, performance, & extras. ',
        name: 'lodash',
        main: 'lodash.js',
        mapping: [
            {
                reg: /^\/lodash\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        umd2commonjs: false
    },


{
  "name": "lodash",
  "description": "The modern build of lodash modular utilities.",
  "repos": "https://github.com/lodash/lodash.git",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "3.9.3",
  "build": "rm package.json && npm install --prefix . lodash@3.9.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\/(.*\.js)$/i,
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
  "name": "lodash",
  "description": "The modern build of lodash modular utilities.",
  "repos": "https://github.com/lodash/lodash.git",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "3.10.0",
  "build": "rm package.json && npm install --prefix . lodash@3.10.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\/(.*\.js)$/i,
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
  "name": "lodash",
  "description": "The modern build of lodash modular utilities.",
  "repos": "https://github.com/lodash/lodash.git",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "version": "3.10.1",
  "build": "rm package.json && npm install --prefix . lodash@3.10.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/lodash\/(.*\.js)$/i,
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
