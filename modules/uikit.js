'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/uikit/bower-uikit.git',
        version: 'v2.16.2',
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
                reg: /^\/(css|fonts)\//,
                release: '$&' // css, fonts 原样保留（已排除*.min.css）
            },
            {
                reg: /^\/js\/uikit\.js$/,
                release: 'uikit.js' // js/uikit.js 放到根目录
            },
            {
                reg: /^\/js\/components\/(.+\.js)$/,
                release: '$1' // js/components 下所有 js 文件放到根目录（已排除*.min.js）
            },
            {
                reg: /^\/README\.md$/i,
                release: '$&' // 保留 readme
            },
            {
                reg: '*',
                release: false // 其它排除
            }
        ]
    }]
})();
