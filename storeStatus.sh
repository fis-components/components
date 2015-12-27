#!/usr/bin/env bash
set -e
currentCommitId=$(git rev-parse HEAD)

mkdir ./output
cd ./output
cp ../.travis.yml ./.travis.yml
echo "Last Commit Id is $currentCommitId"
echo "$currentCommitId" > ./commitId.log

git init
git remote add origin https://github.com/fis-components/components.git

#AU
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"
git config credential.helper "store --file=.git/credential"
echo "https://${GH_TOKEN}:@github.com" > .git/credential

git push origin :history
git add commitId.log
git add .travis.yml
git commit -am "save status"

git branch history
git checkout history

git push -f origin history
