FIS 组件生态
===========

[Demo](https://github.com/fex-team/fis-components-demo)

![](./install.png)
![](./sample.png)

## 背景

目前互联网上已经存在大量的组件，我们为什么不直接在fis中使用呢？


## 为什么不直接使用 bower

个人觉得有以下几个原因，导致 bower 不适合 fis。

1. bower 包没有严格的存放规范，每个包的引用方式的可能不一样，且没用的文件比较多，影响编译性能。
2. 大部分都是 amd 规范，fis 的 mod.js 不能直接使用。
3. 我的组件只想部门内共享。

针对这几个问题，我们的解决方案。

1. 我们指定了更严格的[规范](https://github.com/fis-components/spec), 同时我们把不必要的文件去掉了。
2. fis 的 mod.js 虽然不支持 amd, 但是支持 commonJS, 我们自动的把 amd 转成了 commonJs 规范。
3. fis install 默认来源于 [fis-components](https://github.com/fis-components)，同时，我们的组件安装支持3中平台，github, gitlab 或者 lights. 目前 gitlab 和 lights 都是支持私有部署的，所以只要把组件放在这些平台，组件就是私有的了。
