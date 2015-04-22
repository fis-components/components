'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/Lanfei/jQuery-Sina-Emotion',
        version: '0.2.1',
        tag: 'v2.1',
        description: '一个用来方便快速地创建新浪微博表情选择对话框的jQuery插件。',
        name: 'jquery-sina-emotion',
        main: 'jquery-sina-emotion.js',
        dependencies: [
            "jquery@>=1.6"
        ],
        mapping: [
            {
                reg: /^\/jquery-sinaEmotion-(.*)?\.js$/i,
                release: 'jquery-sina-emotion.js'
            },
            {
                reg: /^\/jquery-sinaEmotion-(.*)?\.css$/i,
                release: 'jquery-sina-emotion.css'
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
        shim: {
            'jquery-sina-emotion.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
