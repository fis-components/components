'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-time-picker",
  "description": "React TimePicker",
  "repos": "https://github.com/react-component/time-picker.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "gregorian-calendar@4.x",
    "gregorian-calendar-format@4.x",
    "rc-trigger@1.x"
  ],
  "version": "1.0.0-alpha7",
  "build": "rm package.json && npm install --prefix . rc-time-picker@1.0.0-alpha7",
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
  "name": "rc-time-picker",
  "description": "React TimePicker",
  "repos": "https://github.com/react-component/time-picker.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "gregorian-calendar@4.x",
    "gregorian-calendar-format@4.x",
    "rc-trigger@1.x"
  ],
  "version": "1.0.0-alpha8",
  "build": "rm package.json && npm install --prefix . rc-time-picker@1.0.0-alpha8",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-time-picker\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-time-picker\/assets\/(.*)$/i,
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
  "name": "rc-time-picker",
  "description": "React TimePicker",
  "repos": "https://github.com/react-component/time-picker.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@2.x",
    "gregorian-calendar@4.x",
    "gregorian-calendar-format@4.x",
    "rc-trigger@1.x"
  ],
  "version": "1.0.0-alpha9",
  "build": "rm package.json && npm install --prefix . rc-time-picker@1.0.0-alpha9",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-time-picker\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/rc-time-picker\/assets\/(.*)$/i,
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