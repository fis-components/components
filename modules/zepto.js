'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/madrobby/zepto.git',
        version: 'v1.1.4',
        description: 'zepto',
        main: 'main.js',
        mapping: [
            {
                reg: /^\/src\/(.*)$/,
                release: '$1'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            'zepto.js': {
                "exports": ["Zepto"]
            },

            'ajax.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'assets.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'callbacks.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'data.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'deferred.js': {
                "deps": ["./zepto.js", "./callbacks.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'detect.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'event.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'form.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'fx.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'fx_methods.js': {
                "deps": ["./zepto.js", "./fx.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'guesture.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'ie.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'ios3.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'selector.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'stack.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'touch.js': {
                "deps": ["./zepto.js"],
                "vars": ["Zepto"],
                "exports": ["Zepto"]
            },

            'main.js': {
                "content": [
                    "require('./event.js');",
                    "require('./ajax.js');",
                    "require('./form.js');",
                    "require('./ie.js');"
                ].join('\n'),
                "exports": "require('./zepto.js')"
            }
        }
    },


    {
        extend: 'v1.1.4',
        version: 'v1.1.5'
    },


    {
        extend: 'v1.1.4',
        version: 'v1.1.6'
    }]
})();
