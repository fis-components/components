'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/uikit/bower-uikit.git',
        version: '2.16.2',
        name: 'uikit',
        main: 'uikit.js',
        description: "A lightweight and modular front-end framework for developing fast and powerful web interfaces.",
        dependencies: [
            "jquery@>=1.9"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false // 排除 *.min.js, *.min.css
            },

            {
                reg: /^\/js\/(.*)$/,
                release: '$1'
            },

            {
                reg: '*',
                release: '$&'
            }
        ],
        shim: {
            'uikit.js': {
                "content": [
                    "require('./core/core');",
                    "require('./core/touch');",
                    "require('./core/utility');",
                    "require('./core/smooth-scroll');",
                    "require('./core/scrollspy');",
                    "require('./core/toggle');",
                    "require('./core/alert');",
                    "require('./core/button');",
                    "require('./core/dropdown');",
                    "require('./core/grid');",
                    "require('./core/modal');",
                    "require('./core/nav');",
                    "require('./core/offcanvas');",
                    "require('./core/switcher');",
                    "require('./core/tab');",
                    "require('./core/tooltip');",
                    "module.exprots = window.UIkit;"
                ].join("\n"),

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            // core
            'core/alert.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/button.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/core.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/dropdown.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/grid.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/modal.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/nav.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/offcanvas.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/scrollspy.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/smooth-scroll.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/switcher.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/tab.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/toggle.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/tooltip.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/touch.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'core/utility.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            // components
            'components/accordion.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/autocomplete.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/cover.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/datepicker.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/form-password.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/form-select.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/grid.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/htmleditor.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/lightbox.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/nestable.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/notify.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/pagination.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/search.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/slideshow-fx.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/slideshow.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/sortable.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/sticky.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/timepicker.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },

            'components/upload.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            }
        }
    }]
})();
