module.exports = (function() {

    return [{

        // 目标组件的地址
        repos: 'https://github.com/leeluolee/stateman.git',

        // 需要转换的版本
        version: 'v0.2.0',

        // 在 fis-components 中的名称
        name: 'stateman',

        description: 'A tiny foundation that providing nested state-based routing for complex web application. https://leeluolee.github.io/stateman',

        // 主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件
        main: 'stateman.js',

        // 设置此组件的依赖。
        dependencies: [

        ],

        // 配置文件信息，只把需要的文件 copy 过来
        mapping: [
            {
                reg: /^\/(stateman\.js)$/,
                release: '$1'
            },
            {
                reg: /^\/src\/(.*\.js)$/,
                release: 'src/$1'
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
