'use strict';

module.exports = (function() {
    return [
{
  "name": "rc-form-validation",
  "description": "form-validation ui component for react",
  "repos": "https://github.com/react-component/form-validation.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "async-validator@1.3.x",
    "object-assign@4.x",
    "rc-util@3.x"
  ],
  "version": "2.4.15",
  "build": "rm package.json && npm install --prefix . rc-form-validation@2.4.15",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-form-validation\/lib\/(.*)$/i,
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
  "name": "rc-form-validation",
  "description": "form-validation ui component for react",
  "repos": "https://github.com/react-component/form-validation.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "async-validator@1.3.x",
    "object-assign@4.x",
    "rc-util@3.x"
  ],
  "version": "2.4.16",
  "build": "rm package.json && npm install --prefix . rc-form-validation@2.4.16",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-form-validation\/lib\/(.*)$/i,
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
  "name": "rc-form-validation",
  "description": "form-validation ui component for react",
  "repos": "https://github.com/react-component/form-validation.git",
  "main": "./lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "async-validator@1.3.x",
    "object-assign@4.x",
    "rc-util@3.x"
  ],
  "version": "2.5.0",
  "build": "rm package.json && npm install --prefix . rc-form-validation@2.5.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/rc-form-validation\/lib\/(.*)$/i,
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