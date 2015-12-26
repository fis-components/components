#!/usr/bin/env bash
set -e

echo "$1 $2 $3"
ROOT=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
cd ../
pwd

#[ci skip]

node $ROOT/saveHash.js $1 $2 $3

#AU
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"
git config credential.helper "store --file=.git/credential"
git config --global push.default simple
echo "https://${GH_TOKEN}:@github.com" > .git/credential

git add packages
git status
git commit -m  "[ci skip] saveHash $1@$2"
git brach
git push origin master

git status
exit 1;
