require('shelljs/global');
const fs = require('fs');
const path = require('path');
const write = fs.writeFileSync;
const deepEqual = require('deep-equal');
const assign = require('object-assign');
const semver = require('semver');

const modules = find('modules').filter(function(file) { 
  return file.match(/\.js$/);
});

modules.forEach(function(filename) {
  var data = require('../' + filename).filter(function(tag) {
    return semver.valid(tag.version);
  });

  data.forEach(function(item) {

    if (item.mapping) {
      item.mapping.forEach(function(subitem) {
        subitem.reg = subitem.reg.source;
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

    delete clone.extend;

    return clone;
  })

  write('packages/' + path.basename(filename, '.js') + '.json',  JSON.stringify(config, null, 2));
})
