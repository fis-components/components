'use strict';

module.exports = (function() {
    return [
{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.5.0",
  "build": "rm package.json && npm install --prefix . redux-actions@0.5.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.5.1",
  "build": "rm package.json && npm install --prefix . redux-actions@0.5.1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.6.0",
  "build": "rm package.json && npm install --prefix . redux-actions@0.6.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.7.0",
  "build": "rm package.json && npm install --prefix . redux-actions@0.7.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.8.0",
  "build": "rm package.json && npm install --prefix . redux-actions@0.8.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "redux-actions",
  "description": "Flux Standard Action utlities for Redux",
  "repos": "https://github.com/acdlite/redux-actions.git",
  "main": "lib/index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "flux-standard-action@^0.6.0",
    "reduce-reducers@^0.1.0"
  ],
  "version": "0.9.0",
  "build": "rm package.json && npm install --prefix . redux-actions@0.9.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/redux-actions\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": /^\/LICENSE\.md$/i,
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
