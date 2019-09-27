# Xunit Viewer

Takes all your XUnit and JUnit XML files and makes them reable

## Features

* Generate a HTML single file with ability to search, filter
* Render results out to the console, this comes with the ability to search and filter
* Re-run the above when a file changes
* Start a server with websockets to keep the browser in-sync with the data
* Add files to the web app without having to re-run xunit viewer

Xunit Viewer supports node LTS version (currently 10)

## Usage, CLI

```sh
npm i -g xunit-viewer
xunit-viewer --help
```

## Usage, Node

```js
const xunitViewer = require('xunit-viewer')
xunitViewer(args)
```

It is `async` so you may need to do the following

```js
const xunitViewer = require('xunit-viewer')
const main = async () => {
  await xunitViewer(args)
}
main()
```

## Usage, React

```js
import React from 'react'
import XunitViewer from 'xunit-viewer/component'

export default () => {
  return <XunitViewer
    menu={true}
    files={[]}
  />
}
```

## Contributing

Simply run the following

```sh
docker-compose up --build -d
```

The following will start
* app (port 3000)
* server (port 3030)
* console
* output (saved to output/sample.html)

These are using either webpack (react-scripts) or pm2 in order to restart on file changes

## Help Wanted!

I am always looking for sample data. If you have some results which you think are "interesting" then please raise an issue or pull request and we can add this to our sample data.

## Issues

Raise any issues using GitHub and provide sample data where possible.

It may be useful to know what node and npm version you are using as well as what OS you are running to help debug any issues.

## TODO

* filtering cli, I think it would say what the URL is or apply it to console
* test toggles, they do not repsond like the other toggles do
* files
  * tabs, add/remove file
  * contents change
  * populate contents
* setup gh-pages to work, it should have index.html sample.html and two images
* write some tests
* split suite into components
* add router
* responsive menu button