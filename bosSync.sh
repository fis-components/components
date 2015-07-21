#!/usr/bin/env bash

ROOT=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

repos=$1
version=$2

mkdir temp
remote="https://codeload.github.com/fis-components/${repos}/tar.gz/${version}"
filename="temp/${repos}@${version}_all.tar.gz"
echo "Downloading ${remote}"
curl -o $filename $remote

info="https://raw.githubusercontent.com/fis-components/${repos}/${version}/component.json"
infofile="temp/${repos}@${version}_component.json"
echo "Downloading ${info}"
curl -o $infofile $info

ak="${BOS_AK}"
sk="${BOS_SK}"

php -v
php $ROOT/bos/sync.php "${ak}" "${sk}" $repos $version $filename $infofile
