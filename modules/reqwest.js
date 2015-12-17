'use strict';

module.exports = (function() {
    return [
{
  "name": "reqwest",
  "description": "A wrapper for asynchronous http requests",
  "repos": "https://github.com/ded/reqwest.git",
  "main": {
    "xhr2": false
  },
  "tag": "master",
  "reposType": "npm",
  "version": "2.0.3",
  "build": "rm package.json && npm install --prefix . reqwest@2.0.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/reqwest\/(\[object Object\])$/i,
      "release": "$1"
    }
  ]
},

{
  "name": "reqwest",
  "description": "A wrapper for asynchronous http requests",
  "repos": "https://github.com/ded/reqwest.git",
  "main": {
    "xhr2": false
  },
  "tag": "master",
  "reposType": "npm",
  "version": "2.0.4",
  "build": "rm package.json && npm install --prefix . reqwest@2.0.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/reqwest\/(\[object Object\])$/i,
      "release": "$1"
    }
  ]
},

{
  "name": "reqwest",
  "description": "A wrapper for asynchronous http requests",
  "repos": "https://github.com/ded/reqwest.git",
  "main": {
    "xhr2": false
  },
  "tag": "master",
  "reposType": "npm",
  "version": "2.0.5",
  "build": "rm package.json && npm install --prefix . reqwest@2.0.5",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/reqwest\/(\[object Object\])$/i,
      "release": "$1"
    }
  ]
}
    ]
})();