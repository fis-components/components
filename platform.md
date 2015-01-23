FIS 组件平台建设
=============================

fis 组件安装可以支持 github、gitlab 和 lights 三种。

默认情况下，fis install 的组件来源来自于[fis-components](https://github.com/fis-components)。

## 如何维护 [fis-components](https://github.com/fis-components) 平台

FIS 目前把一些常用的的组件，结合 travis-ci 自动转换成了 CommonJs 规范的组件，去掉了多余的文件。

如何管理这些组件？

实际上现在所有的组件都配置在 [modules](https://github.com/fis-components/components/tree/master/modules) 下面。


示例：

```javascript
module.exports = (function() {

    return [{

        // 目标组件的地址
        repos: 'https://github.com/defunkt/jquery-pjax.git',

        // 需要转换的版本
        version: 'v1.9.4',

        // 在 fis-components 中的名称
        name: 'jquery-pjax',

        // 主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件
        main: 'jquery.pjax.js',

        // 设置此组件的依赖。
        dependencies: [
            "jquery@>=1.8"
        ],

        // 配置文件信息，只把需要的文件 copy 过来
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/jquery\.pjax\.js$/,
                release: 'jquery.pjax.js'
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
            "jquery.pjax.js": {
              "deps": ["jquery"]
            }
        }
    }]
})();
```

如果发现 [fis-components](https://github.com/fis-components) 没有你想要的组件，欢迎提交pull request，添加相应的配置文件。

## 如何使用私有平台

相信大家都比较关心私有组件平台如何搭建。

首先请先了解一下 fis install 目标组件时，是以什么样的一种规则去定位的（[详情请看这](https://github.com/fis-components/components/blob/master/install.md#component-%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E)）, 掌握之后你会发现有以下几种方式来使用私有组件。

1. 写全路径，指定私有组件。如： `github:my-space/jquery`
2. 在项目中 `component.json` 设定默认 `protocol` 为私有平台

目前厂内有内部的 [gitlab](http://gitlab.baidu.com/groups/fis-components) 平台，供内部使用, 可以更快的被下载到。
