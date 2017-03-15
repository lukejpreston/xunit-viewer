# Xunit Viewer

Takes your XMl xunit results and then turns it into a nice single HTML file

## CLI

You can use xunit-viewer from the command line

First install it

`npm i -g xunit-viewer`

Then run it

`xunit-viewer`

you can also run it with these optional params, see the next section for what they default to

```bash
--results=file_or_folder
--ignore=pattern_a,pattern_b,pattern_c
--output=file_or_folder_or_console
--title="The title"
--port=8080
--watch
--color=false
--filter.suites.value="Suite names matching this value"
--filter.suites.types=all,pass,fail,skip,error,unknown
--filter.tests.value="Test names matching this value"
--filter.tests.types=all,pass,fail,skip,error,unknown
--filter.properties.value="Properties matching with key or value matching this value"
--filter.properties.types=all
```

## Node

If you want to run this from a node script instead of command line first install it

`npm i -D xunit-viewer`

Then from your scripts do the following

```js
const XunitViewerCli = require('xunit-viewer/cli')
XunitViewerCli({
    results: '',
    ignore: [],
    output: false,
    title: 'Xunit Viewer',
    port: false,
    watch: false,
    color: true,
    filter: {}
})
```

all are optional, those are default values

* `results` the file or folder where the results are, defaults to where the cli is running from i.e. `process.cwd()`
* `ignore` an array of patterns to ignore or a single string with a pattern to ignore
* `output` if folder will save a file `xunit-viewer.html` to that folder, if a file will save to that file if `'console'` then it will spit out the results to the console
* `title` title for the HTML
* `port` if `false` it will not start a server, otherwise it will start serving the output and not save not save a file unless you also provide `output`
* `watch` will re run the cli when anything in `results` changes, if you have a port it will also update that via websockets
* `color` if `output === 'console'` then it will either be in color or not
* `filter` will filter out `suites`, `tests` and `properties` from the console output example
```json
{
    "suites": {
        value: "Suite names matching this value",
        type: ["all", "pass", "fail", "skip", "error", "unknown"],
    },
    "tests": {
        value: "Test names matching this value",
        type: ["all", "pass", "fail", "skip", "error", "unknown"],
    },
    "properties": {
        value: "Properties matching with key or value matching this value",
        type: ["all"]
    },
}
```

if any value is invalid it will try and use default

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
Using sockets and lighter

## TODO

* add a repl
* meta data for slack
* publish to npm
* make better stub data
* better error handling
* junit viewer to use this instead
* set up something which will parse in browser
* clean everything and wrote some more tests
