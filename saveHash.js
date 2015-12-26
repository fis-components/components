var path = require('path');
var fs = require('fs');
var hash = require('object-hash');
var assign = require('object-assign');
const write = fs.writeFileSync;

var ARGV = process.argv;
var name = ARGV[2];
var version = ARGV[3];
var folder = ARGV[4] || "";

var package = require('./packages/' + folder + name + '.json');
var tag;

package.tags.every(function(item) {
    if (item.version === version) {
        tag = item;
        return false;
    }

    return true;
});

if (!tag) {
    throw new Error(version + ' is not found!')
}

var data = assign({}, package, tag);
delete data.tags;
delete data.__hash;
var hashvalue = hash(data);

tag.__hash = hashvalue;

console.log("Save new hash %s to %s", hashvalue, path.join(__dirname, './packages/' + folder + name + '.json'));
write(path.join(__dirname, './packages/' + folder + name + '.json'), JSON.stringify(package, null, 2));
