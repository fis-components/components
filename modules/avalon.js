module.exports = (function() {

    return [{

        // 目标组件的地址
        repos: 'https://github.com/RubyLouvre/avalon.git',

        // 需要转换的版本
        version: '1.4.7.2',

        // 在 fis-components 中的名称
        name: 'avalon',

        // 主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件
        main: 'avalon.shim.js',

        // 设置此组件的依赖。
        dependencies: [
            
        ],

        // 配置文件信息，只把需要的文件 copy 过来
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*\.js)$/,
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

        // 当目标不是 amd/umd 规范时，需要设置 shim 信息。
        shim: {
           
        }
    }]
})();