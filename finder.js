var glob = require('glob');
var _ = require('lodash');
var path = require('path');

// ## 总体说明
// 寻找给定目录符合匹配的文件。
//
// - dir是要搜索的目录。
// - patterns是一个或一组符合glob规则的表达式。
// - 如果匹配的是目录，则排除。
// - 匹配英文惊叹号开头的patterns要从结果中排除。
module.exports = function (dir, patterns) {
    'use strict';
    var p = patterns || '**',
        opts = {
            cwd: dir,
            nodir: true
        };
    if (!Array.isArray(patterns)) {
        p = [patterns];
    }
    return _.chain(p)
        .reduce(function (a, e) {
            return e[0] === '!' ? _.difference(a, glob.sync(e.substring(1), opts)) : _.union(a, glob.sync(e, opts));
        }, [])
        .map(function (e) {
            return {
                relative: e,
                cwd: dir,
                absolute: path.join(dir, e)
            };
        })
        .value();
};
