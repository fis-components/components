require('shelljs/global');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const write = fs.writeFileSync;
var packages = [];

var taskFile = path.join(__dirname, '../task.yml');
var taskLogFile = path.join(__dirname, '../task.yml.log');
if (!test('-f', taskFile)) {
  console.log("task.yml miss!");
  exit();
}

if (test('-f', taskLogFile)) {
  var lastSuccessMessageId = read(taskLogFile, 'utf8').trim();
  var range = lastSuccessMessageId + '..HEAD';
  var ret = exec('git diff --name-status ' + range);

  if (ret.code) {
    range = 'HEAD^..HEAD';
    ret = exec('git diff --name-status ' + range);
  }
  var result = ret.output;
  if (!/\stask\.yml\s/.test(result)) {
    console.log("task.yml did not change, skip!")
    exit();
  }

  result = exec('git diff ' + range + ' -- task.yml').output;
  result.replace(/^\+\s+\-\s(.*)$/img, function(_, name) {
    packages.push(name.trim().replace(/^\-\s/, ''));
  });

  if (!packages.length) {
    console.log('Detected nothing!');
    exit();
  } else {
    console.log('The following packages will be get upgraded. \n\x1b[32m%s\x1b[0m', packages.join('\n'));
  }
}

if (!packages.length) {
  var task = read(taskFile, 'utf8');

  config = yaml.load(task);
  packages = config.sync.npm;

  if (!Array.isArray(packages)) {
    packages = [packages];
  }
}

var currentCommitId=exec('git rev-parse HEAD').output.trim();
var comment = 'node ' + path.join(__dirname, './npm.js') + ' ' + packages.map(function(item) {
  return '"' + item + '"';
}).join(' ') + '';
console.log(comment);
exec(comment).code && exit(1);

console.log("git checkout master");
exec("git checkout master").code && exit(1);

console.log("git pull origin master");
exec("git pull origin master").code && exit(1);

write(taskLogFile, currentCommitId);

console.log("cp tools/builds/*.json packages/");
exec("cp tools/builds/*.json packages/");

var comment = 'sh ' + path.join(__dirname, './commit.sh');
console.log(comment);
exec(comment).code && exit(1);

console.log("Done!");
