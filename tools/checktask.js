require('shelljs/global');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const read = fs.readFileSync;
const write = fs.writeFileSync;

var taskFile = path.join(__dirname, '../task.yml');
if (!test('-f', taskFile)) {
  console.log("task.yml miss!");
  exit();
}

var task = read(taskFile, 'utf8');
if (/^#last\:([^\r\n]*)/i.test(task)) {
  var lastSuccessMessageId = RegExp.$1;

  var result = exec('git diff --name-status ' + lastSuccessMessageId + '..HEAD').output;
  if (!/\stask\.yml\s/.test(result)) {
    console.log("Nothing changed, skip!")
    exit();
  }
}

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

console.log("cp tools/builds/*.json packages/");
exec("cp tools/builds/*.json packages/");

task  = '#last:' + currentCommitId +'\n' + task;
write(taskFile, task);

console.log("git status");
exec("git status");

console.log("git add packages");
exec("git add packages");

console.log("git add task.yml");
exec("git add task.yml");

console.log("git commit -m \"Created by https://github.com/fis-components/components/blob/master/task.yml\"");
exec("git commit -m \"Created by https://github.com/fis-components/components/blob/master/task.yml\"");

var comment = 'sh ' + path.join(__dirname, './commit.sh');
console.log(comment);
exec(comment).code && exit(1);

console.log("Done!");