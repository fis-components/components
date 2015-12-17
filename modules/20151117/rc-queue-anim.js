'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-queue-anim",
  "description": "Queue animation component for react",
  "repos": "https://github.com/react-component/queue-anim.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "velocity-animate@~1.2.3"
  ],
  "version": "0.11.0",
  "build": "rm package.json && npm install --prefix . rc-queue-anim@0.11.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/assets\/(.*)$/i,
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
  "name": "rc-queue-anim",
  "description": "Queue animation component for react",
  "repos": "https://github.com/react-component/queue-anim.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "velocity-animate@~1.2.3"
  ],
  "version": "0.11.2",
  "build": "rm package.json && npm install --prefix . rc-queue-anim@0.11.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/assets\/(.*)$/i,
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
  "name": "rc-queue-anim",
  "description": "Queue animation component for react",
  "repos": "https://github.com/react-component/queue-anim.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "velocity-animate@~1.2.3"
  ],
  "version": "0.11.3",
  "build": "rm package.json && npm install --prefix . rc-queue-anim@0.11.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-queue-anim\/assets\/(.*)$/i,
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