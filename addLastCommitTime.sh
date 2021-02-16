#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)
TARGET_DIR="/content/post"

FULL_PATH=$SCRIPT_DIR$TARGET_DIR

for pathfile in `find $FULL_PATH -iname '*.md'`; do
    LAST_COMMIT_DATE=`git log -1 --date=iso-strict --format=%cd $pathfile`
    # lastmod: "2018-01-10T22:15:21-08:00"
    # echo "lastmod: \"$LAST_COMMIT_DATE\""

    # sed
    # Adding last modified time from the last commit time each post
    sed -i '' '4i\
    lastmod = '${LAST_COMMIT_DATE}'
    ' $pathfile
done