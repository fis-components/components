module.exports = (function() {

    return [{

        // 目标组件的地址
        repos: 'https://github.com/sentsin/layer.git',

        // 需要转换的版本
        version: 'v2.1',
        tag: "master",
        build: "grunt",

        // 在 fis-components 中的名称
        name: 'layer',

        // 主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件
        main: 'layer.js',

        // 设置此组件的依赖。
        dependencies: [
            "jquery@>=1.8"
        ],

        // 配置文件信息，只把需要的文件 copy 过来
        mapping: [
            {
                reg: /^(?:\/src\/|\/test|GruntFile\.js)/i,
                release: false

            },

            {
                reg: /\.(js|css)$/,
                release: '$0',
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

        // 当目标不是 amd/umd 规范时，需要设置 shim 信息。
        shim: {
            "layer.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
