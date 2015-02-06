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
                ].join("\n")
            },

            // core
            'core/alert.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/button.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/core.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"]
            },

            'core/dropdown.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/grid.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/modal.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/nav.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/offcanvas.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/scrollspy.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/smooth-scroll.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/switcher.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/tab.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/toggle.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/tooltip.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"],
                "vars": ["jQuery"]
            },

            'core/touch.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"]
            },

            'core/utility.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"]
            },

            // components
            'components/accordion.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/autocomplete.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/cover.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/datepicker.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/form-password.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/form-select.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/grid.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/htmleditor.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/lightbox.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/nestable.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/notify.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/pagination.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/search.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/slideshow-fx.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/slideshow.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/sortable.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/sticky.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/timepicker.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            },

            'components/upload.js': {
                "deps": ["jquery", "../uikit"],
                "vars": ["jQuery"]
            }
        }
    }]
})();
