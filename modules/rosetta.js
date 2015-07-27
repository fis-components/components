'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/jiexuangao/rosetta.git',
            version: '1.0.0',
            tag: '1.0.0',
            main: 'Rosetta.js',
            mapping: [
                {
                    reg: /^\/dist\/((Rosetta|Rosetta-ie)\.(css|js))$/ig,
                    release: '$1'
                },

                {
                    reg: '*',
                    release: false
                }
            ]
        },
        {
            version: '1.0.1',
            tag: '1.0.1',
            extend: '1.0.0'
        },
        {
            version: '1.0.2',
            tag: '1.0.2',
            extend: '1.0.0'
        }
    ];
})();