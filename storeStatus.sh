#!/usr/bin/env bash

currentCommitId=$(git rev-parse HEAD)

mkdir ./output
cd ./output
echo "$currentCommitId" > ./commitId.log

git init

#AU
git config --global user.email "fansekey@gmail.com"
git config --global user.name "xiangshouding"
git config credential.helper "store --file=.git/credential"
echo "https://${GH_TOKEN}:@github.com" > .git/credential

git push origin :history
git add *
git commit -am "save status"

git branch history
git checkout history

git push -f origin history
