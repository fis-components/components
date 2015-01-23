FIS 组件安装
=====================

## 安装方式

组件安装支持两种方式。

1. fis install 命令中指定，如：`fis install jquery`.
2. 当前或者父级`component.json`文件中指定。通过读取 `component.json` 中的 dependencies 数组来决定安装什么内容。

    ```json
    {
      "dependencies": [
        "jquery@^1.9.1",
        "jquery-ui",
        "jquery-validation",
        "compass-mixins",
        "bootstrap"
      ]
    }
    ```

## 多平台

目前支持 `lights`、`github`和`gitlab` 三种。即 fis 可以安装存放在这三种平台中的任何组件。用户可以根据自己喜好，任意选用其一来聚合该产品线的通用组件。

## component 路径说明。

因为 fis install  支持多种平台，所以严格来说一个 component 的完整路径应该是这样的。

    github:fis-components/jquery@1.9.1
    gitlap:fis-components/jquery@1.9.1
    lights:lightjs.duapp.com/jquery@1.9.1

为了简化路径，目前有这么几种规则。

如果配置的 `protocol` （平台标示） 为 `github` 时，那么路径就可以简化为

    fis-components/jquery@1.9.1

同时，如果 github 下面配置的默认的用户为 `fis-compoennts` 时，路径可以进一步简化。

    jquery@1.9.1

当然版本也是可以省略的，如果用户不关心什么版本号，可以进一步简化成：

    jquery


这样 `fis install jquery` 安装的组件，就完全等价于 `fis install github:fis-components/jquery@latest`。

`gitlab` 和 `lights` 也有同样的规则。唯一不同的是 `lights` 没有作者信息，取而代之的是 `domain` lights 域名。默认 lights 的 domain 为 `lights.duapp.com`，如果用户使用自己搭建的 lights 平台，则可以通过指定 domain 来区分。

## component.json 配置说明

更多配置说明请查看[规范说明](https://github.com/fis-components/spec)中字段的说明,这里详细说明重要部分。

compnent.json 分两种：[私有的]和[发布的]。[发布的] 是指在那些已经发布了的组件里面的 `component.json`，用来说明所属组件的信息。而私有的一般就是fis项目中根目录下面的 `component.json` 用来说明，当前 fis 项目要依赖哪些组件，本身这个项目不是组件，也基本不会发布成组件。

### protocol
当指定组件的时候，如果省略了平台信息，那么默认将会采用这个值作为默认平台。此处可以设置成 `lights`、`github` 或者 `gitlab` 中的任意一种，默认是 `github`

### github.author or gitlab.author
当 `github` 或者 `gitlab` 平台下面的组件作者信息省略后，那么默认将会采用这个值作为默认作者。如下配置。

    {
      "protocol": "gitlab",
      "gitlab": {
        "author": "fis-components"
      },
      "github": {
        "author": "my-team"
      }
    }

基于以上配置

| 简洁写法  | 实际路径 |
| ------------- | ------------- |
| jquery  | gitlab:fis-components/jquery |
| my-team:jquery  | gitlab:my-team/jquery |
| github:jquery | github:my-team/jquery |
| github:my-team/jquery | github:my-team/jquery |

### lights.repos

当 `lights` 平台下面的 lights 域名信息省略后，那么将会采用这个值作为默认作者。如下配置。

    {
      "protocol": "lights",
      "lights": {
        "repos": "example.duapp.com"
      }
    }

基于以上配置

| 简洁写法  | 实际路径 |
| ------------- | ------------- |
| jquery  | lights:example.duapp.com/jquery |
| lights.duapp.com:jquery  | lights:lights.duapp.com/jquery |

## 版本信息
安装组件的时候可以指定版本信息，如果不指定默认将安装最新的。（注意这里最新的不是 master 版本，当存在 tags 信息的时候，用最新的 tag 版本，不存在才会使用 master 版本）指定版本的时候，可以严格的指定版本如 `jquery@1.9.1` 也可以采用 [semver语法](https://github.com/npm/node-semver), 如： ~1.9.1 、>=1.6、^2.0.0。
更多语法请查看用 [semver语法说明](https://github.com/npm/node-semver)。

## 安装说明
目标组件将会安装在 `/comonents` 目录下面。决定是否安装有以下 case:

1. 如果目标组件已经安装，且 components.json中标记的版本满足版本需求，将不再重复安装。
2. 如果目标组件已经安装，且当前版本满足需求，但是其依赖没被安装，其依赖将会被安装。
3. 如果目标组件已经被安装，但是版本不符合需求，目标组件将会被重复安装。其依赖是否重新安装与否同样需要判断版本信息。

## 依赖处理
当安装某一组件时，该组件如果也存在其他组件依赖，所有依赖的组件同样也会被安装在 components 目录。

因为所有依赖都会被打平安装在 components 目录下面，没有层级关系，如果出现同一组件被指定不同的版本将会出现冲突，目前的处理方案非常简单，没有做版本对比采用版本较高的版本，而是采用先入为主的原则处理。

`compoennt.json` 中的 `protocol`、`github.author`、`gitlab.authro` 和 `lights.repos` 在组件里面定义也是有意义的。他能决定当前组件中内部依赖将会定位到什么平台已经哪个作者下面。当时又不影响此组件外的组件查找。

## root 目录查找规则
`fis install` 执行时，可以不在 fis 项目目录，通过 --root 来设定。同时如果没有设定 --root，将会按以下规则来决定哪个目录为 root 目录

1. 从当前目录开始向父级查找 fis-conf.js 文件，如果在某个目录下面查找到此文件，则把该目录认为 root
2. 所有的父级都没有找到，则把 `cwd` 命令行所在目录作为 root.


## fis-conf.js 配置
`fis install` 也会读取 `fis-conf.js` 配置文件。有以下配置项：

1. `component.dir`
2. `component.protocol`
3. `component.github.author`
4. `component.gitlab.author`
5. `component.lights.repos`

`component.dir` 默认为 `/components` 即 fis 项目下面的 components 目录。关于其他变量解释，请查看 component.json 部分。与 component.json 中配置一样，只是 component.json 中配置优先级更高。
