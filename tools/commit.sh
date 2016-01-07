#!/usr/bin/env bash
set -e

#AU
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"
git config credential.helper "store --file=.git/credential"
echo "https://${GH_TOKEN}:@github.com" > .git/credential


git add packages
git add task.yml

echo "git status"
git status
git commit -m "Created by https://github.com/fis-components/components/blob/master/task.yml"

git push origin master