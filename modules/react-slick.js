'use strict';

module.exports = (function() {
    return [
{
  "name": "react-slick",
  "description": " React port of slick carousel",
  "repos": "https://github.com/akiran/react-slick.git",
  "main": "./lib",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.1.1",
    "json2mq@^0.2.0",
    "object-assign@^2.0.0",
    "react-responsive-mixin@^0.3.5",
    "slick-carousel@^1.5.5"
  ],
  "version": "0.9.1",
  "build": "rm package.json && npm install --prefix . react-slick@0.9.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-slick\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/react-slick\/(.*\.js)$/i,
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
  "name": "react-slick",
  "description": " React port of slick carousel",
  "repos": "https://github.com/akiran/react-slick.git",
  "main": "./lib",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.1.1",
    "json2mq@^0.2.0",
    "object-assign@^2.0.0",
    "react-responsive-mixin@^0.3.5",
    "slick-carousel@^1.5.5"
  ],
  "version": "0.9.2",
  "build": "rm package.json && npm install --prefix . react-slick@0.9.2",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-slick\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/react-slick\/(.*\.js)$/i,
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
  "name": "react-slick",
  "description": " React port of slick carousel",
  "repos": "https://github.com/akiran/react-slick.git",
  "main": "./lib",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@^2.1.1",
    "json2mq@^0.2.0",
    "object-assign@^2.0.0",
    "react-responsive-mixin@^0.3.5",
    "slick-carousel@^1.5.5"
  ],
  "version": "0.9.3",
  "build": "rm package.json && npm install --prefix . react-slick@0.9.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/react-slick\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/react-slick\/(.*\.js)$/i,
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