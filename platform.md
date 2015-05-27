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

## 配置说明

### repos

目标组件的地址，只支持 http 地址。

### version

版本号，目标组件必须存在这个 tag.

### name

该组件的名称，可以与原仓库名不一致。

### main

主文件，请查看规范说明。当组件名引用的时候，默认引用的是此文件。可选，默认是 `index.js`

### dependencies

数组格式，指定该组件需要依赖哪些组件，支持 [semverion](https://github.com/npm/node-semver).

注意，如果目标组件没有 require 该依赖，请对应的配置 shim.

### mapping

类似于 fis 里面 sourcemap。配置此属性的目的是要清理掉没用的文件，只留下有用。这样可以加快组件的编译速度，和增加可读性。

1. `reg` 为正则或者 glob。
2. `release` 设置为 false， 将忽略命中的文件，设置成路径，则将命中的文件，放在对应的位置。

### shim

如果目标组件代码内部没有标记依赖，则需要此属性来转换成带带依赖的代码。

比如 bootstrap 他本身是依赖 jquery，但是他的代码里面没用 require 进来。如果不配置此属性，当使用 bootstrap 的时候，不能自动的把  jquery 加载进来。

```javascript
shim: [
    "bootstrap.js": {
      "deps": ["jquery"]
    }
]
```

shim 的 key 为文件的路径。 shim 的 value 中的属性说明

1. `deps` 组件依赖列表
2. `vars` 默认组件依赖不会赋值给任何局部变量。如果设置了 `var` 属性则会把依赖的结果赋值给局部变量。
3. `exports` 设置暴露的内容。 比如：`$`， 当 require('bootstrap') 的时候，返回值就是 jquery
4. `init` 可选， Function 类型，如果设置了 init 则将 此 function 的返回值作为 exports 的内容
5. `content` 如果设置了此属性，整个文件的内容都会被替换成所设置的。以上三种配置都无效。
6. `replace` 可以用来简单的内容替换。如：

    ```javascript
    {
        shim: [
            'core/core.js': {
                "deps": ["jquery"],
                "vars": ["jQuery"],

                "replace": {
                    "from": /window\.jQuery/g,
                    "to": "jQuery"
                }
            },,

            ...
        ]
    }
    ```

    jQuery 2.x 不会暴露 window.jQuery 所以需要修改成使用局部变量。
    
### extend

当新加一个版本时，如果大部分的配置与之前配置的基本一致，可以通过 `extend` 关键字来继承。如：

```javascript
'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/jquery/jquery.git',
        version: '1.9.1',
        name: 'jquery',
        main: 'jquery.js',
        build: 'npm install && npm install grunt-cli && ./node_modules/.bin/grunt',
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /^\/dist\/(.*\.js)/,
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
        ]
    }, {
        version: '2.1.0',
        build: 'npm run build',
        extend: '1.9.1'
    }]
})();
```

## 本地测试
自己配置了规则，但是不知道是否转换正确，怎么办？

请使用以下命令来验证规则。

```
node test.js modules/xxx.js
```

可以支持批量转化，比如: `node test.js modules/jquery-*.js`.

## 如何使用私有平台

相信大家都比较关心私有组件平台如何搭建。

首先请先了解一下 fis install 目标组件时，是以什么样的一种规则去定位的（[详情请看这](https://github.com/fis-components/components/blob/master/install.md#component-%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E)）, 掌握之后你会发现有以下几种方式来使用私有组件。

1. 写全路径，指定私有组件。如： `github:my-space/jquery`
2. 在项目中 `component.json` 设定默认 `protocol` 为私有平台

目前厂内有内部的 [gitlab](http://gitlab.baidu.com/groups/fis-components) 平台，供内部使用, 可以更快的被下载到。
