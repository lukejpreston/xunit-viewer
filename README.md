# Xunit Viewer

Takes all your XUnit and JUnit XML files and makes them readable

![Icon](https://raw.githubusercontent.com/lukejpreston/xunit-viewer/master/XunitViewerIcon.png)

[![npm version](https://badge.fury.io/js/xunit-viewer.svg)](https://badge.fury.io/js/xunit-viewer)
[![Downloads on npm](http://img.shields.io/npm/dm/xunit-viewer.svg)](https://www.npmjs.com/package/xunit-viewer)

Have a look at the [demo](https://lukejpreston.github.io/xunit-viewer/)

## Features

* Generate a HTML single file with ability to search, filter
* Render results out to the console, this comes with the ability to search and filter
* Re-run the above when a file changes
* Start a server with websockets to keep the browser in-sync with the data
* Add files to the web app without having to re-run xunit viewer
* Adds the meta data to the header so you can share the URL in places such as slack, example

![Example](https://raw.githubusercontent.com/lukejpreston/xunit-viewer/master/example-header.png)

Xunit Viewer supports node LTS version, but should support 10+

## Usage, CLI

```sh
npm i -g xunit-viewer
xunit-viewer --help
```

### Commands

```text
xunit-viewer [command]

Commands:
  xunit-viewer  Renders Xunit style xml results

Options:
  --version       Show version number                                  [boolean]
  -r, --results   File/Folder of results                     [string] [required]
  -i, --ignore    Ignore patterns                                        [array]
  -o, --output    Output filename               [string] [default: "index.html"]
  -t, --title     HTML title e.g. "My Tests"                            [string]
  -c, --console   Render in console                                    [boolean]
  -s, --server    Start a server and sockets for live updates
                                                      [boolean] [default: false]
  -n, --no-color  No color in the console                              [boolean]
  -w, --watch     Re-run when a file changes                           [boolean]
  -p, --port      Starts a server with sockets on that port, if no port is
                  provided then it will run on port 3000 (or next available)
                                                                        [number]
  --help          Show help                                            [boolean]

Examples:
  xunit-viewer -r file.xml                 a file
  xunit-viewer -r folder                   a folder
  xunit-viewer -r folder -i *-broke.xml    ignore
  xunit-viewer -r folder -o my-tests.html  rename output
  xunit-viewer -r folder -t "My Tests"     change HTML title
  xunit-viewer -r folder -c                render in console
  xunit-viewer -r folder -c -s -o false    render in console and do not save
  xunit-viewer -r folder -c -n             no color in console
  xunit-viewer -r folder -w                start watch
  xunit-viewer -r folder -w -p 5050        watch at 5050
```

## Usage, Node

Xunit Viewer is asynchronous so you may need to wrap it up like so

```js
const xunitViewer = require('xunit-viewer')

const main = async () => {
  await xunitViewer({
    server: false,
    results: 'data',
    ignore: ['_thingy', 'invalid'],
    title: 'Xunit View Sample Tests',
    output: 'output.html'
  })
}
main()
```

If you are going to run it from a script with no other code

```js
const xunitViewer = require('xunit-viewer')

xunitViewer({
  server: false,
  results: 'data',
  ignore: ['_thingy', 'invalid'],
  title: 'Xunit View Sample Tests',
  output: 'output.html'
})
```

## Usage, React

not available

## Contributing

Here are a list of commands to get you running

```sh
npm i
npm start # this starts the dev app
npm release # this updates the code in the cli folder
npm run demo # this generates the demo
./bin/xunit-viewer # to run the local command line tool

npm test # runs the tests
npm run text:ci # runs without watch and also generates a html output
npm run lint # runs eslint
```

## Help Wanted

I am always looking for sample data. If you have some results which you think are "interesting" then please raise an issue or pull request and we can add this to our sample data.

## Issues

Raise any issues using GitHub and provide sample data where possible.

To help debug any issues please provide the following info

* node and npm version
* xunit viewer version
* browser
* sample xml

If you have issue migrating from Junit Viewer or older version of Xunit Viewer please feel free to raise an issue titled **MIGRATION HELP**

There is a `v5` branch which maintained through Open Source PRs, this branch will not maintain `npm audit` issues

## TODO

If you would like to do any of the following please raise an issue to discuss

* files
  * tabs, add/remove file
  * contents change
  * populate contents
* automate gh-pages
* test, lint using travis
* add react router
* filtering cli
* responsive menu button
* split suite into components
