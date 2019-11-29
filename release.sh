#!/bin/bash

npm run lint
npm run release
npm run test:ci

CURRENT=$(echo npm version | grep xunit-viewer | cut -d"'" -f4)
npm version ${1-patch}
npm publish
LATEST=$(echo npm version | grep xunit-viewer | cut -d"'" -f4)

npm run release:demo
git commit -am 'gh-pages $LATEST'

git push
git push --tags
