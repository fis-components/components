'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/mbostock/d3.git',
        version: 'v3.5.9',
        description: 'A JavaScript visualization library for HTML and SVG. https://d3js.org',
        name: 'd3',
        main: 'd3.js',
        mapping: [
            {
                reg: /^\/d3\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
