#!/usr/bin/env bash

export ROOT=$(pwd)

git_clone () {
    git clone "${1}" "${2}" #> /dev/null 2>&1
    if [ "$?" != "0" ]; then
        return 1
    fi
    return 0
}

git_update_repos () {
    repos=$1
    version=$2
    node $ROOT/sync.js create-component.json $repos $version

    #AU
    git config --global user.email "fansekey@gmail.com"
    git config --global user.name "xiangshouding"
    git config credential.helper "store --file=.git/credential"
    echo "https://${GH_TOKEN}:@github.com" > .git/credential

    git add -A -f
    git commit -m "based on https://github.com/fis-components/components/blob/master/modules/${repos}.js" -a

    git push origin master
    git tag -a "$version" -m "create tag $version"
    git push --tags
}

export -f git_clone
export -f git_update_repos

sync () {
    new=$1
    repos=$2
    build=$3
    version=$4
    build_dest=$5
    tag=$6
    rebuild=$7
    testing=$8

    dest="$ROOT/_$new"

    echo "=SYNC ${new} from ${repos}, version: ${version}"

    if [ -d "_${new}" ]; then
        rm -rf "_${new}"
        echo "=LOCAL rm -rf _${new}"
    fi

    git_clone "https://github.com/fis-components/${new}" "_${new}"

    if [ "$?" != "0" ]; then
        # new origin
        node $ROOT/sync.js create-repos "${new}" "${GH_TOKEN}" "${repos}"
        if [ "$?" != "0" ]; then
            exit 1
        fi
        git_clone "https://github.com/fis-components/${new}" "_${new}"
        if [ "$?" != "0" ]; then
            exit 1
        fi
    else
        cd "_${new}"
        git pull --all
        found=$(git tag | grep $version)

        if [ "$found" != "" ]; then
            if [ "$rebuild" = "true" ]; then
                echo "= Tag $version already exists, now deleting..."

                #AU
                git config --global user.email "fansekey@gmail.com"
                git config --global user.name "xiangshouding"
                git config credential.helper "store --file=.git/credential"
                echo "https://${GH_TOKEN}:@github.com" > .git/credential

                git tag -d "$version"
                git push origin :refs/tags/$version

                echo "= Clean all files"
                git ls-files | xargs git rm
                git commit -am "rm all files"
                git push
            else
                echo "=TAG tag $version exists."
                exit 1
            fi
        fi

        cd $ROOT
    fi

    if [ -d $new ]; then
        rm -rf $new
        echo "=LOCAL rm -rf $new"
    fi

    git_clone $repos $new

    if [ "$?" = "0" ]; then

        cd $new

        git checkout $tag

        if [ "$?" != "0" ]; then
            echo "=GIT: git checkout $tag fail."
            exit 1
        fi

        # run build
        if [ "$build" != "" ]; then
            echo  '=BUILD '$new
            eval $build || ('=BUILD build fail.' 2>&1 || exit 1)
        fi

        # if [ -d "$build_dest" ]; then
        #     cp -rf "./${build_dest}" "$dest"
        # fi

        # if [ -d "./dist" ]; then
        #     cp -rf "./dist" "$dest"
        # fi

        node $ROOT/sync.js move "$new" "$version" "$(pwd)" "$dest"

        node $ROOT/sync.js convert "$new" "$version" "$dest"

        if [ "$?" != "0" ]; then
            echo '=ROADMAP move fail'
            exit 1
        fi

        cd "$dest"
        echo "=CD $dest"

        git_update_repos $new $version

        cd $ROOT
    fi
}

export -f sync

main () {
    echo '#START build.sh'
    sync "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8"
    echo '#END build.sh'
}

main "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8"
