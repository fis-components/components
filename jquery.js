'use strict';

module.exports = (function() {
    return {
        type: 'git',
        repos: 'https://github.com/jquery/jquery.git',
        version: '0.0.1',
        description: 'jQuery',
        build: 'npm run build',
        maping: [
            {
                reg: /dist\/(.*\.js)'/,
                release: '$1'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }
})();