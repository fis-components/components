var fs = require('fs');
var path = require('path');
var exists = fs.existsSync;
var write = fs.writeFileSync;
var read = fs.readFileSync;
var esprima = require('esprima');
var estraverse = require('estraverse');
var escodegen = require('escodegen');
var escope = require('escope');
var esformatter = require('esformatter');

// 转换 js
module.exports = function(options, callback) {
    if (!options.files) {
        options = {
            files: options
        };
    }

    var files = options.files;

    files.forEach(function(info) {
        try {
            write(info.dest || info.absolute, transform(read(info.absolute, 'utf8'), options));
        } catch (e) {
            console.log('Got Eroor: %s while converting %s', e.message, info.dest || info.absolute);
        }
    });

    if (options.config && options.config.shim) {
        var shim = options.config.shim;

        Object.keys(shim).forEach(function(key) {
            var obj = shim[key];
            var filepath = path.join(options.dir, key);

            if (!exists(filepath) && !obj.content) {
                return;
            }

            if (Array.isArray(obj)) {
                obj = {
                    deps: obj
                }
            }

            var prefix = '';
            var affix = '';

            if (obj.deps) {
                // require 同时赋值给某个变量。
                var vars = obj.vars || [];

                obj.deps.forEach(function(dep, i) {
                    prefix += (vars[i] ? ('var ' + vars[i] +' = ') : '') + 'require(\'' + dep + '\');\n';
                });
            }

            if (obj.init) {
                affix = 'modules.exports = ('+obj.init+')('+(function() {
                    var deps = [];

                    if (obj.deps) {
                        obj.deps.forEach(function(dep) {
                            deps.push('require(\''+ dep +'\')');
                        });
                    }

                    return deps.join(', ');
                })()+');\n' + affix;
            } else if (obj.exports) {
                affix = '\nmodule.exports = ' + obj.exports + ';\n' + affix;
            }

            var contents = prefix + (obj.content || read(filepath, 'utf8')) + affix;

            if (obj['replace']) {
                var replace = obj['replace'];

                if (!Array.isArray(replace)) {
                    replace = [replace];
                }

                replace.forEach(function(item) {
                    contents = contents.replace(item.from, item.to);
                });
            }

            write(filepath, contents);
        });
    }

    callback();
};

function transform(data, options) {

    // remove  uselessfull data.
    data = data.replace(/\/\*[\s\*\d]*?\*\//g, '');

    var ast = esprima.parse(data, {
        range: true,
        tokens: true,
        comment: true
    });

    ast = escodegen.attachComments(ast, ast.comments, ast.tokens);

    var isAMD = false;

    var scopes = escope.analyze(ast).scopes;
    var gs = scopes.filter(function(scope) {
        return scope.type == 'global';
    })[0];

    estraverse.replace(ast, {
        leave: function(node) {
            if (isDefine(node)) {
                // 查找 define 的定义，如果没有定义，说明是全局的。
                // 否则说明是局部 define.
                var ref = findRef(gs, node.callee);

                if (ref.resolved) {
                    return;
                }
                isAMD = true;

                if (
                    node.arguments.length == 1 &&
                    node.arguments[0].type == 'FunctionExpression'
                        ) {

                    var factory = node.arguments[0];
                    var ast = createProgram(factory.body.body);
                    return transformProgram(ast);
                } else if (node.arguments.length == 1 &&
                    node.arguments[0].type == 'ObjectExpression'
                        ) {

                    // object literal
                    var obj = node.arguments[0];
                    return createModuleExport(obj);
                } else if (node.arguments.length == 1 &&
                    node.arguments[0].type == 'Identifier'
                        ) {

                    // object literal
                    var obj = createReqsCall([], node.arguments[0]);
                    return createModuleExport(obj);
                } else if (
                    node.arguments.length == 2 &&
                    node.arguments[0].type == 'ArrayExpression' &&
                    node.arguments[1].type == 'FunctionExpression'
                        ) {

                    var dependencies = node.arguments[0],
                        factory = node.arguments[1];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });
                    var vars = factory.params.map(function(el) {
                        return el.name
                    });
                    var reqs = createRequires(ids, vars);
                    var ast;
                    if (reqs) {
                        ast = createProgram([reqs].concat(factory.body.body));
                    } else {
                        ast = createProgram(factory.body.body);
                    }
                    return transformProgram(ast);
                } else if (
                    node.arguments.length == 2 &&
                    node.arguments[0].type == 'ArrayExpression' &&
                    node.arguments[1].type == 'ObjectExpression'
                        ) {

                    var dependencies = node.arguments[0],
                        obj = node.arguments[1];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });
                    var vars = [];
                    var reqs = createRequires(ids, vars);
                    var ast;

                    if (reqs) {
                        ast = createProgram([reqs].concat([createModuleExport(obj)]));
                    } else {
                        ast = createProgram([createModuleExport(obj)]);
                    }
                    return transformProgram(ast);

                } else if (
                    node.arguments.length == 2 &&
                    node.arguments[0].type == 'ArrayExpression' &&
                    node.arguments[1].type == 'Identifier'
                        ) {

                    var dependencies = node.arguments[0],
                        obj = node.arguments[1];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });
                    var ast = createProgram([createModuleExport(createReqsCall(ids, obj))]);
                    return transformProgram(ast);

                } else if (
                    node.arguments.length == 2 &&
                    node.arguments[0].type == 'Literal' &&
                    node.arguments[1].type == 'FunctionExpression'
                        ) {

                    var factory = node.arguments[1];
                    var ast = createProgram(factory.body.body);
                    return transformProgram(ast);
                } else if (
                    node.arguments.length == 2 &&
                    node.arguments[0].type == 'Literal' &&
                    (
                        node.arguments[1].type == 'ObjectExpression' ||
                        node.arguments[1].type == 'Identifier'
                    )
                        ) {

                    // object literal
                    var obj = node.arguments[1];
                    return createModuleExport(obj);

                } else if (
                    node.arguments.length == 3 &&
                    node.arguments[0].type == 'Literal' &&
                    node.arguments[1].type == 'ArrayExpression' &&
                    node.arguments[2].type == 'FunctionExpression'
                        ) {

                    var dependencies = node.arguments[1],
                        factory = node.arguments[2];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });
                    var vars = factory.params.map(function(el) {
                        return el.name
                    });
                    var reqs = createRequires(ids, vars);
                    var ast;

                    if (reqs) {
                        ast = createProgram([reqs].concat(factory.body.body));
                    } else {
                        ast = createProgram(factory.body.body);
                    }

                    return transformProgram(ast);
                } else if (
                    node.arguments.length == 3 &&
                    node.arguments[0].type == 'Literal' &&
                    node.arguments[1].type == 'ArrayExpression' &&
                    node.arguments[2].type == 'ObjectExpression'
                        ) {

                    var dependencies = node.arguments[1],
                        obj = node.arguments[2];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });
                    var vars = [];
                    var reqs = createRequires(ids, vars);
                    var ast;

                    if (reqs) {
                        ast = createProgram([reqs].concat([createModuleExport(obj)]));
                    } else {
                        ast = createProgram([createModuleExport(obj)]);
                    }
                    return transformProgram(ast);
                } else if (
                    node.arguments.length == 3 &&
                    node.arguments[0].type == 'Literal' &&
                    node.arguments[1].type == 'ArrayExpression' &&
                    node.arguments[2].type == 'Identifier'
                        ) {

                    var dependencies = node.arguments[1],
                        obj = node.arguments[2];

                    var ids = dependencies.elements.map(function(el) {
                        return el.value
                    });

                    var ast = createProgram([createModuleExport(createReqsCall(ids, obj))]);
                    return transformProgram(ast);
                }
            } else if (options.convertAsync && isRequire(node) && node.arguments[0].type == 'ArrayExpression') {
                return {
                    type: 'CallExpression',
                    callee: {
                        type: 'MemberExpression',
                        computed: false,
                        object: {
                            type: 'Identifier',
                            name: 'require'
                        },
                        property: {
                            type: 'Identifier',
                            name: 'async'
                        },
                        name: 'require'
                    },
                    arguments: node.arguments
                };
            } else if (node.type === 'IfStatement') {

                var parents = this.parents();
                if (parents[parents.length - 1].type === 'IfStatement') {
                    return;
                }


                var found = null;
                var detect = node;

                while (detect) {
                    if (isAMDCondition(detect)) {
                        found = detect;
                        break;
                    }

                    detect = detect.alternate;
                }

                if (found) {
                    return found.consequent.type === 'ExpressionStatement' ? found.consequent : found.consequent.body[0];
                    // return createCommonJsCondition(found.consequent);
                }
            }
        }
    });

    if (!isAMD) {
        return data;
    }

    return escodegen.generate(ast, {
        comment: true,
        format: {
            safeConcatenation: true
        }
    });

    // return esformatter.format(data, {
    //     // inherit from the default preset
    //     preset : 'default',
    //     indent : {
    //         value : '    '
    //     },
    //     lineBreak : {
    //         before : {
    //             // at least one line break before BlockStatement
    //             BlockStatement : '>=1',
    //             // only one line break before BlockStatement
    //             DoWhileStatementOpeningBrace : 1,
    //             // ...
    //         }
    //     },
    //     whiteSpace : {
    //         // ...
    //     }
    // });
}

function transformProgram(ast) {
    estraverse.replace(ast, {
        leave: function(node) {
            if (isReturn(node)) {
                var parents = this.parents();

                if (parents.length == 1) {
                    return createModuleExport(node.argument);
                }
            }
        }
    });
    return ast;
}

function isDefine(node) {
    var callee = node.callee;
    return callee && node.type == 'CallExpression' && callee.type == 'Identifier' && callee.name == 'define';
}

function isReturn(node) {
    return node.type == 'ReturnStatement';
}

function isRequire(node) {
    var callee = node.callee;
    return callee &&
        node.type == 'CallExpression' &&
        callee.type == 'Identifier' &&
        callee.name == 'require';
}

function isAMDCondition(node) {
    if (node.type === 'IfStatement') {
        var condition = node.test;

        while(condition) {
            var item = condition.left ? condition.right : condition;

            if (item.type === 'MemberExpression' && item.object.name === 'define' && item.property.name == 'amd') {
                return true;
            }

            condition = condition.left;
        }
    }

    return false;
}

function createProgram(body) {
    return {
        type: 'Program',
        body: body
    };
}

function createRequires(ids, vars) {
    var statements = [];

    for (var i = 0, len = ids.length; i < len; ++i) {
        if (['require', 'module', 'exports'].indexOf(ids[i]) != -1) {
            continue;
        }

        if (vars[i]) {
            statements.push({
                type: 'VariableDeclaration',
                declarations: [{
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: vars[i]
                    },
                    init: {
                        type: 'CallExpression',
                        callee: {
                            type: 'Identifier',
                            name: 'require'
                        },
                        arguments: [{
                            type: 'Literal',
                            value: ids[i]
                        }]
                    }
                }],
                kind: 'var'
            });
        } else {
            statements.push({
                type: 'ExpressionStatement',
                expression: {
                    type: 'CallExpression',
                    callee: {
                        type: 'Identifier',
                        name: 'require'
                    },
                    arguments: [{
                        type: 'Literal',
                        value: ids[i]
                    }]
                }
            });
        }
    }

    if (statements.length == 0) {
        return null;
    }

    return createProgram(statements);
}

function createReqsCall(ids, obj) {
    var reqs = [];

    for (var i = 0, len = ids.length; i < len; i++) {
        if (~['require', 'module', 'exports'].indexOf(ids[i])) {
            reqs.push({
                type: 'Identifier',
                name: ids[i]
            });
        } else {
            reqs.push({
                type: 'CallExpression',
                callee: {
                    type: 'Identifier',
                    name: 'require'
                },
                arguments: [
                    {
                        type: 'Literal',
                        value: ids[i]
                    }
                ]
            });
        }


    }

    return {
        type: 'CallExpression',
        callee: obj,
        arguments: reqs
    };
}

function createModuleExport(obj) {
    return {
        type: 'ExpressionStatement',
        expression: {
            type: 'AssignmentExpression',
            operator: '=',
            left: {
                type: 'MemberExpression',
                computed: false,
                object: {
                    type: 'Identifier',
                    name: 'module'
                },
                property: {
                    type: 'Identifier',
                    name: 'exports'
                }
            },
            right: {
                type: "LogicalExpression",
                operator: "||",
                left: obj,
                right: {
                    type: "MemberExpression",
                    computed: false,
                    object: {
                        type: "Identifier",
                        name: "module"
                    },
                    property: {
                        type: "Identifier",
                        name: "exports"
                    }
                }
            }
        }
    };
}

function createCommonJsCondition(consequent, alternate) {
    return {
        type: 'IfStatement',
        consequent: consequent,
        alternate: alternate,
        test: {
            type: "LogicalExpression",
            operator: "&&",
            left: {
                type: "BinaryExpression",
                operator: "===",
                left: {
                    type: "UnaryExpression",
                    operator: "typeof",
                    argument: {
                        type: "Identifier",
                        name: "module"
                    },
                    prefix: true
                },
                right: {
                    type: "Literal",
                    value: "object",
                    raw: "'object'",
                }
            },
            right: {
                type: "BinaryExpression",
                operator: "===",
                left: {
                    type: "UnaryExpression",
                    operator: "typeof",
                    argument: {
                        type: "MemberExpression",
                        computed: false,
                        object: {
                            type: "Identifier",
                            name: "module"
                        },
                        property: {
                            type: "Identifier",
                            name: "exports"
                        }
                    },
                    prefix: true
                },
                right: {
                    type: "Literal",
                    value: "object",
                    raw: "'object'"
                }
            }
        }
    }
}

function findRef(scope, ident) {
    var refs = scope.references;
    var i = 0;
    var ref, childScope;

    while ((ref = refs[i++])) {

        if (ref.identifier === ident) {
            return ref;
        }
    }

    i = 0;

    while ((childScope = scope.childScopes[i++])) {

        if ((ref = findRef(childScope, ident))) {
            return ref;
        }
    }
}
