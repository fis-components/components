#!/usr/bin/env bash
set -e
export ROOT=$(pwd)

git_clone () {
    git clone "${1}" "${2}" #> /dev/null 2>&1
    if [ "$?" != "0" ]; then
        return 1
    fi
    return 0
}

export -f git_clone

sync () {
    new=$1
    repos=$2
    build=$3
    version=$4
    build_dest=$5
    tag=$6
    folder=$7
    isFromJson=$8

    dest="$ROOT/$new@$version"
    tempDir="_$new"

    if [ -d $tempDir ]; then
        rm -rf $tempDir
    fi

    if [ "$isFromJson" = "true" ]; then
        mkdir -p $tempDir
    else
        git_clone $repos $tempDir
    fi

    if [ "$?" = "0" ]; then

        cd $tempDir

        if [ "$isFromJson" != "true" ]; then
            git checkout $tag
        fi

        if [ "$?" != "0" ]; then
            echo "=GIT: git checkout $tag fail."
            exit 1
        fi

        # run build
        if [ "$build" != "" ]; then
            echo  '=BUILD '$new
            touch package.json
            eval $build || ('=BUILD build fail.' 2>&1 || exit 1)
        fi

        # if [ -d "$build_dest" ]; then
        #     cp -rf "./${build_dest}" "$dest"
        # fi

        # if [ -d "./dist" ]; then
        #     cp -rf "./dist" "$dest"
        # fi

        mkdir -p dest
        node $ROOT/sync.js create-component.json "$new" "$version" "$isFromJson" "$folder"

        node $ROOT/sync.js move "$new" "$version" "$(pwd)" "$dest" "$folder" "$isFromJson"

        node $ROOT/sync.js convert "$new" "$version" "$dest" "$folder" "$isFromJson"



        if [ "$?" != "0" ]; then
            echo '=ROADMAP move fail'
            exit 1
        fi



        cd $ROOT
    fi
}

export -f sync

main () {
    echo '#START test.sh'
    echo "$1 $2 $3 $4 $5 $6 $7 $8"
    sync "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8"
    echo '#END test.sh'
}

main "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8"
