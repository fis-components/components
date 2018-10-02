module.exports = (function() {

    return [{

        // 目标组件的地址
        repos: 'http://ming.liu@gitlab.noboup.com/ming.liu/nobo-tasks-feelings.git',

        // 需要转换的版本
        version: 'v1.0.0',

        // 在 fis-components 中的名称
        name: 'nobo-tasks-feelings',

        // 主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件
        main: 'answerService.js',

        // 设置此组件的依赖。
        dependencies: []
    }]
})();
