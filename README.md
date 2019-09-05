# Xunit Viewer

Xunit Viewer support node LTS version (currently 10)

## Contributing

The following will start
* app (port 3000)
* server (port 3030)
* console
* output
* test

each will restart when a file changes

```sh
docker-compose up --build -d
```

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

## TODO

* get socket io working
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