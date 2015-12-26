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
      item.mapping = item.mapping.map(function(subitem) {
        subitem = assign({}, subitem)
        var reg = subitem.reg;
        subitem.reg = (reg instanceof RegExp) ? reg.source : glob.make(reg).source.replace(/\//g, '\\/');
        return subitem;
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

    var data = assign({}, config, clone);
    delete data.__hash;

    clone.__hash = hash(data);

    return clone;
  })

  write('packages/' + path.basename(filename, '.js') + '.json',  JSON.stringify(config, null, 2));
})
