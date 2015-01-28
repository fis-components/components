'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/brianreavis/microplugin.js.git',
        version: 'v0.0.3',
        name: 'microplugin',
        main: 'microplugin.js',
        keywords: ["extensibility","plugins","architecture","require","dependencies"],
        description: "A lightweight plugin / dependency system for javascript libraries.",
        mapping: [
            {
                reg: /^\/microplugin\.js$/,
                release: '$&'
            },
            {
                reg: /^\/README\.md$/i,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }]
})();
