'use strict';

module.exports = (function() {
    return [
{
  "name": "highcharts",
  "description": "JavaScript charting framework",
  "repos": "https://github.com/highcharts/highcharts.git",
  "main": "lib/highcharts",
  "tag": "master",
  "reposType": "npm",
  "version": "0.0.11",
  "build": "rm package.json && npm install --prefix . highcharts@0.0.11",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/highcharts\/lib\/(.*)\.src\.js$/i,
      "release": "lib/$1.js"
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
  "name": "highcharts",
  "description": "JavaScript charting framework",
  "repos": "https://github.com/highcharts/highcharts.git",
  "main": "lib/highcharts",
  "tag": "master",
  "reposType": "npm",
  "version": "4.1.10",
  "build": "rm package.json && npm install --prefix . highcharts@4.1.10",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/highcharts\/lib\/(.*)\.src\.js$/i,
      "release": "lib/$1.js"
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
  "name": "highcharts",
  "description": "JavaScript charting framework",
  "repos": "https://github.com/highcharts/highcharts.git",
  "main": "lib/highcharts",
  "tag": "master",
  "reposType": "npm",
  "version": "4.2.0",
  "build": "rm package.json && npm install --prefix . highcharts@4.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/highcharts\/lib\/(.*)\.src\.js$/i,
      "release": "lib/$1.js"
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
