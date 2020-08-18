#!/bin/bash

set -e

npm run lint
npm run build:cli
npm run test:ci
./bin/xunit-viewer -r junit.xml -c -C false
CURRENT=$(echo $(npm version | grep xunit-viewer | cut -d"'" -f4))
git commit -am "tested $CURRENT"

npm version ${1-patch}
npm publish
LATEST=$(echo npm version | grep xunit-viewer | cut -d"'" -f4)

npm run release:demo

git add -A
git commit -am "release demo $LATEST"

git push
git push --tags
