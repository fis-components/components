'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/eternicode/bootstrap-datepicker.git',
        version: 'v1.4.0',
        description: 'Bootstrap datapicker',
        main: 'bootstrap-datepicker.js',
        dependencies: [
            "bootstrap@>=2.0.4",
            "jquery@>=1.7.1"
        ],

        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(?:css|js)\/(.*?)$/,
                release: '$1'
            },
            {
                reg: /^\/dist\/locales\/(.*?)$/,
                release: 'locales/$1'
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
            'bootstrap-datepicker.js': {
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-bg_BG.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-cs_CZ.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-da_DK.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-de_DE.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-es_CL.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-eu.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-fa_IR.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-fr_FR.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-hu_HU.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-it_IT.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-ko_KR.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-nl_NL.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-pl_PL.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-pt_BR.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-pt_PT.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-ro_RO.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-ru_RU.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-sk_SK.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-sl_SI.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-sv_SE.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-tr_TR.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-ua_UA.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-zh_CN.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            },

            'i18n/defaults-zh_TW.js': {
                deps: ['../bootstrap-select.js'],
                "replace": {
                    "from": /jQuery/g,
                    "to": "arguments[0]"
                }
            }
        }
    }];
})();
