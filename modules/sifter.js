'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/brianreavis/sifter.js.git',
        version: 'v0.4.0',
        name: 'sifter',
        main: 'sifter.js',
        keywords: ["search","filter","sift","data","results","match","sort","autocomplete"],
        description: "A library for textually searching arrays and hashes of objects by property (or multiple properties). Designed specifically for autocomplete.",
        mapping: [
            {
                reg: /^\/sifter\.js$/,
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
