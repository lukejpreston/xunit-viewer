# Xunit Viewer

Takes your XMl xunit results and then turns it into a nice single HTML file

## CLI

You can use xunit-viewer from the command line

First install it

`npm i -g xunit-viewer`

Then run it

```bash
xunit-viewer
```

It will by default read the current directory and then save to `xunit-viewer-TIMESTAMP.html`

If you want to specify a file or folder of XMl

```bash
xunit-viewer --results=file_or_folder
```

If you want to specify where the file should be saved

```bash
xunit-viewer --save=file
```

By default the title of the output will be
    1. The folder where the command was run
    2. the file or folder specified using `--results`
    3. The file specified using `--save`

but this can be overridden

```bash
xunit-viewer --title="My Title"
```

It also supprots running a server with websockets which will listen to any file change and then update the page

for default port 7123

```bash
xunit-viewer --port
```

or if you want to specify the port

```bash
xunit-viewer --port=8080
```

## Node

If you want to run this from a node script instead of command line first install it

`npm i -D xunit-viewer`

Then from your scripts do the following

```js
const XunitViewer = require('xunit-viewer/cli')
XunitViewer.run({
    port: false | 7123,
    results: file | folder,
    ignore: [],
    save: file,
    title: file | folder | false,
    watch: false
})
```

## Component

You will need to bring in React if you are using the component

It works best with webpack setup but you should be able to work it out if you need to

This is the view which you can reuse

```js
import React from 'react'
import XunitViewer from 'xunit-viewer/component/xunit-viewer'
import 'xunit-viewer/component/index.css'

let MyWrapper = () => {
    return <XunitViewer xml='' suites={[]} title='' />
}
```

## Parser

This library is used to parse the xunit into JSON

You will have the read the data into a string before calling this library

You can safely use this in the browser and from node

```js
const XunitViewerParser = require('xunit-viewer/parser')
XunitViewerParser.parse('xml string')
```

## Junit Viewer

Junit Viewer is now deprecated and is being replaced with this.

### Why?

Better API
Better View
Uses React
Nested Suites

No longer supports hosting the page, this was not needed in the first place

Now replaced with web sockets which will update the data when files change
