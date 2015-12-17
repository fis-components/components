'use strict';

module.exports = (function() {
    return [
{
  "name": "slick-carousel",
  "description": "the last carousel you'll ever need",
  "repos": "https://github.com/kenwheeler/slick.git",
  "main": "slick/slick.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "jquery@>=1.7.2"
  ],
  "version": "1.5.7",
  "build": "rm package.json && npm install --prefix . slick-carousel@1.5.7",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/slick-carousel\/slick\/(.*)$/i,
      "release": "slick/$1"
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
  "name": "slick-carousel",
  "description": "the last carousel you'll ever need",
  "repos": "https://github.com/kenwheeler/slick.git",
  "main": "slick/slick.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "jquery@>=1.7.2"
  ],
  "version": "1.5.8",
  "build": "rm package.json && npm install --prefix . slick-carousel@1.5.8",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/slick-carousel\/slick\/(.*)$/i,
      "release": "slick/$1"
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
  "name": "slick-carousel",
  "description": "the last carousel you'll ever need",
  "repos": "https://github.com/kenwheeler/slick.git",
  "main": "slick/slick.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "jquery@>=1.7.2"
  ],
  "version": "1.5.9",
  "build": "rm package.json && npm install --prefix . slick-carousel@1.5.9",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/slick-carousel\/slick\/(.*)$/i,
      "release": "slick/$1"
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