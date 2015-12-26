require('shelljs/global');
const fs = require('fs');
const path = require('path');
const write = fs.writeFileSync;
const deepEqual = require('deep-equal');
const assign = require('object-assign');
const semver = require('semver');
var hash = require('object-hash');
var glob = require('glob.js');

const modules = find('modules').filter(function(file) { 
  return file.match(/\.js$/);
});

modules.forEach(function(filename) {
  var data = require('../' + filename)
  var map = {};

  data.forEach(function(item) {
      map[item.version] = item;

      if (item.extend) {
          if (!map[item.extend]) {
              throw new Error('Extend `' + item.extend + '` is not defined.');
          }
          var copySelf = assign({}, item)
          assign(item, map[item.extend]);
          assign(item, copySelf);
          delete item.extend;
      }
  });

  data = data.filter(function(tag) {
    return semver.valid(tag.version);
  });

  data.forEach(function(item) {

    if (item.mapping) {
      item.mapping.forEach(function(subitem) {
        if (typeof subitem.reg === "string") {
          subitem.reg = glob.make(subitem.reg);
        }

        subitem.reg = subitem.reg instanceof RegExp ? subitem.reg.source : subitem.reg;
      })
    }
  });

  var config = assign({}, data[0]);

  delete config['version'];
  config.tags = data.map(function(tag) {
    var clone = assign({}, tag);

    Object.keys(tag).forEach(function(key) {
      if (tag[key] && config[key] && deepEqual(tag[key], config[key])) {
        delete clone[key];
      }
    });

    clone.__hash = hash(clone);

    return clone;
  })

  write('packages/' + path.basename(filename, '.js') + '.json',  JSON.stringify(config, null, 2));
})
