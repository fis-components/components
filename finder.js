var glob = require('glob');
var _ = require('lodash');
var path = require('path');

// ## 总体说明
// 寻找给定目录符合匹配的文件。
//
// - dir是要搜索的目录。
// - patterns是一个或一组符合glob规则的表达式。
// - 排除目录。
// - patterns规则有两种形式，一种是匹配，一种是不匹配（已英文惊叹号开头）。
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
            return e[0] === '!' ? a.difference(glob.sync(e.substring(1), opts)) : a.union(glob.sync(e, opts));
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
