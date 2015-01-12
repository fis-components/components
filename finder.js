var glob = require('glob');
var _ = require('lodash');
var path = require('path');


module.exports = function(dir, parttens) {
    parttens = parttens || '**';

    if (!Array.isArray(parttens)) {
        parttens = [parttens];
    }

    var opts = {
        sync: true,
        cwd: dir,
        nodir: true
    };

    var ret = [];

    parttens.forEach(function(pattern) {
        var exclude = pattern.substring(0, 1) === '!';

        if (exclude) {
            pattern = pattern.substring(1);
        }

        var mathes = glob.sync(pattern, opts);

        ret = _[exclude ? 'difference' : 'union'](ret, mathes);
    });

    return ret.map(function(filepath) {
        return {
            relative: filepath,
            cwd: dir,
            absolute: path.join(dir, filepath)
        }
    });
};
