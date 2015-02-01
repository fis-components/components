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
                    "require('./core/core');"
                    "require('./core/touch');"
                    "require('./core/utility');"
                    "require('./core/smooth-scroll');"
                    "require('./core/scrollspy');"
                    "require('./core/toggle');"
                    "require('./core/alert');"
                    "require('./core/button');"
                    "require('./core/dropdown');"
                    "require('./core/grid');"
                    "require('./core/modal');"
                    "require('./core/nav');"
                    "require('./core/offcanvas');"
                    "require('./core/switcher');"
                    "require('./core/tab');"
                    "require('./core/tooltip');"
                    "module.exprots = window.UIkit;"
                ].join("\n")
            },

            // core
            'core/alert.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/button.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/core.js': {
                "deps": ["jquery"]
            },

            'core/dropdown.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/grid.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/modal.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/nav.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/offcanvas.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/scrollspy.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/smooth-scroll.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/switcher.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/tab.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/toggle.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/tooltip.js': {
                "deps": ["jquery", "./core", "./touch", "./utility"]
            },

            'core/touch.js': {
                "deps": ["jquery"]
            },

            'core/utility.js': {
                "deps": ["jquery"]
            },

            // components
            'components/accordion.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/autocomplete.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/cover.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/datepicker.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/form-password.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/form-select.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/grid.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/htmleditor.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/lightbox.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/nestable.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/notify.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/pagination.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/search.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/slideshow-fx.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/slideshow.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/sortable.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/sticky.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/timepicker.js': {
                "deps": ["jquery", "../uikit"]
            },

            'components/upload.js': {
                "deps": ["jquery", "../uikit"]
            }
        }
    }]
})();
