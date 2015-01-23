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

## 编译前后对比

为什么能使用组件名短路径，是因为 fis 有一个编译过程，在编译过程，fis 会自动把路径变成编译后生成的组件路径。

比如，以上的 script.js 代码，编译后会自动变成。(假设当前项目的 namespace 为 `home`)

```javascript
var $ = require('home:components/jquery/jquery.js');

$('.btn').click(function() {
    alert('magic');
})
```

很熟悉？这就是原来 mod.js 的写法！

## 查找规则

之所以当 require('jquery') 的时候能找到其文件在 components/jquery/jquery.js 的位置，是因为有以下查找规则。

1. 根据 jquery 组件名，能确定组件存在在 /components/jquery 目录。
2. 读取 `components/jquery/component.json` 文件，得知 main 属性设置的值为 `jquery.js`
3. 于是可以定位文件为 `components/jquery/jquery.js`

除了能 `require({组件名})` 外，还能 `require({组件名/资源在组件中的位置})`

```
require('bootstrap/button');
```

查找规则相信大家都能猜到，这就不说了。

## js 外的其他资源

我们的组件除了是 js 外，还有可能包含 css 和 tpl 以及 图片、字体等一系列静态资源。

fis 中有[三种语言](http://fis.baidu.com/docs/more/fis-standard.html)能用来，申明资源依赖、引用资源 和 内嵌资源。 当目标资源为组件内部资源时，路径同样可以使用短路径。

```
// @require bootstrap/css/bootstrap.css
```
