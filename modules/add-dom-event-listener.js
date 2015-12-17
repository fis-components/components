'use strict';

module.exports = (function() {
    return [
{
  "name": "add-dom-event-listener",
  "description": "add dom event listener. normalize ie and others",
  "repos": "https://github.com/yiminghe/add-dom-event-listener.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x"
  ],
  "version": "0.0.0",
  "build": "rm package.json && npm install --prefix . add-dom-event-listener@0.0.0",
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
  "name": "add-dom-event-listener",
  "description": "add dom event listener. normalize ie and others",
  "repos": "https://github.com/yiminghe/add-dom-event-listener.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x"
  ],
  "version": "1.0.0",
  "build": "rm package.json && npm install --prefix . add-dom-event-listener@1.0.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/add-dom-event-listener\/lib\/(.*)$/i,
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
  "name": "add-dom-event-listener",
  "description": "add dom event listener. normalize ie and others",
  "repos": "https://github.com/yiminghe/add-dom-event-listener.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "object-assign@4.x"
  ],
  "version": "1.0.1",
  "build": "rm package.json && npm install --prefix . add-dom-event-listener@1.0.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/add-dom-event-listener\/lib\/(.*)$/i,
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