'use strict';

module.exports = (function() {
    return [
{
  "name": "react-draggable",
  "description": "React draggable component",
  "repos": "https://github.com/mzabriskie/react-draggable.git",
  "main": "dist/react-draggable.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames^2.2.0",
    "object-assign^4.0.1"
  ],
  "version": "1.1.3",
  "mapping": [
    {
        reg: /^\/dist\/(.*)$/,
        release: '$1'
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