#!/usr/bin/env bash

ROOT=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

repos=$1
version=$2

rm -rf temp
mkdir -p temp
remote="https://codeload.github.com/fis-components/${repos}/tar.gz/${version}"
filename="temp/${repos}_${version}.tar.gz"
echo "Downloading ${remote}"
echo "curl -o ${ROOT}/${filename} $remote"
curl -o ${ROOT}/${filename} $remote
if [ "$?" != "0" ]; then
    exit 1
fi

info="https://raw.githubusercontent.com/fis-components/${repos}/${version}/component.json"
infofile="temp/${repos}@${version}_component.json"
echo "Downloading ${info}"
echo "curl -o ${ROOT}/${infofile} $info"
curl -o ${ROOT}/${infofile} $info
if [ "$?" != "0" ]; then
    exit 1
fi

ak="${BOS_AK}"
sk="${BOS_SK}"

versions=$(git ls-remote --tags --refs --heads https://github.com/fis-components/${repos}.git  | awk -F/ '{print $3}')
versionsfile="temp/${repos}_versions.txt"
echo $versions
echo $versions > ${ROOT}/${versionsfile}

#php -v
php $ROOT/bos/sync.php "${ak}" "${sk}" $repos $version $filename $infofile $versionsfile

if [ "$?" != "0" ]; then
    exit 1
fi
