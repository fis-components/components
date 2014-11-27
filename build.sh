#!/usr/bin/env bash

export ROOT=$(pwd)

git_clone () {
    git clone "${1}" "${2}" > /dev/null 2>&1
    if [ "$?" != "0" ]; then
        return 1
    fi
    return 0
}

git_push () {
    cd $1
    git remote add sync $2
    git push sync master
    cd -
}

export -f git_clone
export -f git_push

sync () {
    new=$1
    repos=$2
    build=$3
    version=$4

    echo "=SYNC ${new} from ${repos}, version: ${version}"

    # new repos
    git_clone "https://github.com/fis-components/${new}"

    if [ "$?" != "0" ]; then
        # clone origin
        git_clone $repos $new
        
        cd $new

        node $ROOT/sync.js create-repos "${new}" "${GH_TOKEN}" "${repos}"
    else
        cd $new
        
        git pull sync master
        git commit -m "Build: update to v${4}" -a
    fi
    
    echo $?

    if [ "$?" = "0" ]; then

        # run build
        if [ "$build" != "" ]; then
            echo  '=BUILD '$new
            $build || echo ''
            git add dist -f
            git commit -m 'Build: build to dist' ./dist
        fi

        git remote remove origin
        git remote add origin "https://github.com/fis-components/${new}"
        git remote remove sync
        git remote add sync $repos

        node $ROOT/sync.js create-component.json $new
        git add component.json -f || echo ''
        git add __maping.js -f || echo ''
        git commit -m 'Build: add component.json' ./component.json ./__maping.js 

        git push -u origin master || echo "fail: push to ${new}"

        if [ "$4" != "" ]; then
            git tag -a "v$4" -m $4
            git push --tags
        fi
    fi

    cd -

}

export -f sync

main () {
    echo '#START build.sh'
    sync "$1" "$2" "$3" "$4"
    echo '#END build.sh'
}

main "$1" "$2" "$3" "$4"