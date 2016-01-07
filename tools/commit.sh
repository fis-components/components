#!/usr/bin/env bash
set -e

#AU
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"
git config credential.helper "store --file=.git/credential"
echo "https://${GH_TOKEN}:@github.com" > .git/credential

git push origin master