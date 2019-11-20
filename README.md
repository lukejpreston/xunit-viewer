# Xunit Viewer

Takes all your XUnit and JUnit XML files and makes them reable

## Features

* Generate a HTML single file with ability to search, filter
* Render results out to the console, this comes with the ability to search and filter
* Re-run the above when a file changes
* Start a server with websockets to keep the browser in-sync with the data
* Add files to the web app without having to re-run xunit viewer

Xunit Viewer supports node LTS version, but should support 10+

## Usage, CLI

```sh
npm i -g xunit-viewer
xunit-viewer --help

xunit-viewer [command]

Commands:
  xunit-viewer xunit-viewer  Renders Xunit style xml results

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
  xunit-viewer -r folder --s.s "value"     search suite with term "value"
```

## Usage, Node

Xunit Viewer is asynchronous so you may need to 

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

## Usage, React

not available

## Contributing

Run the following

```sh
docker-compose up --build -d
```

The following will start

* app (port 9090)
* server (port 3030)
* console
* output (saved to output/sample.html)

These are using either webpack (react-scripts) or pm2 in order to restart on file changes so you do not need to restart when changing files

## Help Wanted

I am always looking for sample data. If you have some results which you think are "interesting" then please raise an issue or pull request and we can add this to our sample data.

## Issues

Raise any issues using GitHub and provide sample data where possible.

It may be useful to know what node and npm version you are using as well as what OS you are running to help debug any issues.

## TODO

* files
  * tabs, add/remove file
  * contents change
  * populate contents
* setup gh-pages to work, it should have index.html sample.html and two images
* write some tests
* add router
* filtering cli, I think it would say what the URL is or apply it to console
* responsive menu button
* split suite into components
