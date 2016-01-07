require('shelljs/global');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const write = fs.writeFileSync;

var taskFile = path.join(__dirname, '../task.yml');
var taskLogFile = path.join(__dirname, '../task.yml.log');
if (!test('-f', taskFile)) {
  console.log("task.yml miss!");
  exit();
}

if (test('-f', taskLogFile)) {
  var lastSuccessMessageId = read(taskLogFile, 'utf8').trim();

  var result = exec('git diff --name-status ' + lastSuccessMessageId + '..HEAD').output;
  if (!/\stask\.yml\s/.test(result)) {
    console.log("Nothing changed, skip!")
    exit();
  } 
}

var task = read(taskFile, 'utf8');
var currentCommitId=exec('git rev-parse HEAD').output.trim();

config = yaml.load(task);
var packages = config.sync.npm;

if (!Array.isArray(packages)) {
  packages = [packages];
}

var comment = 'node ' + path.join(__dirname, './npm.js') + ' ' + packages.join(' ') + '';
console.log(comment);
exec(comment).code && exit(1);

console.log("git checkout master");
exec("git checkout master").code && exit(1);

write(taskLogFile, currentCommitId);

console.log("cp tools/builds/*.json packages/");
exec("cp tools/builds/*.json packages/");

var comment = 'sh ' + path.join(__dirname, './commit.sh');
console.log(comment);
exec(comment).code && exit(1);

console.log("Done!");