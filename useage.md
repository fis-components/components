FIS 组件使用详情
======================================

这篇文章主要介绍组件被安装到项目里面后，如何去使用它。

我们先看看 node.js 对组件的使用规则。

1. 先根据组件名安装组件。npm install foo
2. 然后在代码就可以直接使用:

    ```javascript
    var foo = require('foo');

    foo.doSomthing();
    ```

现在在 fis 中也是一样的模式。

1. 根据组件名安装组件 fis install jquery. 默认被安装到了当前项目的 commonponents/jquery 目录下面
2. 然后在我们页面里面: script.js 中，可以这样使用。

    ```javascript
    var $ = require('jquery');

    $('.btn').click(function() {
        alert('magic');
    })
    ```

