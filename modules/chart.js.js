'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/nnnick/Chart.js',
        version: 'v1.0.2',
        description: 'Simple HTML5 Charts using the <canvas> tag',
        name: 'chart.js',
        main: 'Chart.js',
        mapping: [
            {
                reg: /^\/Chart\.js$/,
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
