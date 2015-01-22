FIS 组件生态
===========

![](./install.png)
![](./sample.png)

[Demo](https://github.com/fex-team/fis-components-demo)

## 背景

目前互联网上已经存在大量的组件，我们为什么不直接在fis中使用呢？


## 为什么不直接使用 bower

个人觉得有以下几个原因，导致 bower 不适合 fis。

1. bower 包没有严格的存放规范，每个包的引用方式的可能不一样，且冗余的文件多，影响编译性能。
2. 大部分组件采用 amd 规范，在 fis 的 mod.js 中不能直接使用。
3. 有的组件我们希望是私有的，部门级别的共享，bower做不到。

针对这几个问题，我们的解决方案。

1. 我们制定了更严格的[规范](https://github.com/fis-components/spec), 同时我们把不必要的文件去掉了。
2. fis 的 mod.js 虽然不支持 amd, 但是支持 commonJS, 现有 amd 组件可以直接转成了 commonJs 规范。
3. fis install 默认来源于 [fis-components](https://github.com/fis-components)，同时，我们的组件安装支持3种平台，github, gitlab 或者 lights. 目前 gitlab 和 lights 都是支持私有部署的，所以只要把组件放在这些平台，组件就是私有的。
