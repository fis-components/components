'use strict';

module.exports = (function () {
    return [{
        repos: 'https://github.com/lodash-archive/lodash-fp',
        version: '0.10.2',
        description: 'lodash with auto-curried iteratee-first data-last methods.',
        name: 'lodash-fp',
        main: 'lodash-fp.js',
        "mapping": [{
            "reg": /^\/dist\/lodash-fp\.js$/i,
            "release": "lodash-fp.js"
        }, {
            "reg": /^\/README\.md$/i,
            "release": "$&"
        }, {
            "reg": "*",
            "release": false
        }]
    }];
}());
