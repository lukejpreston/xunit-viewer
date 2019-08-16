# Xunit Viewer

![Icon](https://raw.githubusercontent.com/lukejpreston/xunit-viewer/master/XunitViewerIcon.png)

[![npm version](https://badge.fury.io/js/xunit-viewer.svg)](https://badge.fury.io/js/xunit-viewer)
[![Downloads on npm](http://img.shields.io/npm/dm/xunit-viewer.svg)](https://www.npmjs.com/package/xunit-viewer)

Takes your XMl xunit results and then turns it into a nice single HTML file or renders it into the terminal

Have a look at the [demo](https://lukejpreston.github.io/xunit-viewer/)

## !! Help Wanted !!

I want as many examples and test data as possible. Either create a pull request with the following files

```sh
/data/file.xml
/data/file-expected.md
```

Or raise an issue and submit an xml code snippet and what you expect the results to be. The expected file can be anything, sometimes you just want to write a massive description about the test results or say how you expected the results to be presented, either in the HTML view or the console.

## Usage

## CLI

You can use Xunit Viewer from the command line

### Installation

`npm i -g xunit-viewer`

### Options

View this with `xunit-viewer --help`

Option | Action | Type
---|---|---
`--version` | Show version number | boolean
`-r, --results` | File or folder of results | string **required**
`-i, --ignore` | Ignore patterns | array
`-o, --output` | Output filename | string
`-t, --title` | HTML title e.g. "My Tests" | string
`-c, --console` | Render in console | boolean
`-n, --no-color` | No color in the console | boolean
`-w, --watch` | Watch, includes live-reload | boolean
`-p, --port` | Change port for watch | number
`--p.s, --properties.search` | pre-filter option | string
`--p.v, --properties.visible` | pre-filter option | boolean
`--p.e, --properties.expanded` | pre-filter option | boolean
`--s.s, --suites.search` | pre-filter option | string
`--s.s, --suites.expanded` | pre-filter option | string
`--t.s, --tests.search` | pre-filter option | string
`--t.a.v, --tests.all.visible` | pre-filter option | boolean
`--t.a.e, --tests.all.expanded` | pre-filter option | boolean
`--t.a.r, --tests.all.raw` | pre-filter option | boolean
`--t.p.v, --tests.passed.visible` | pre-filter option | boolean
`--t.p.e, --tests.passed.expanded` | pre-filter option | boolean
`--t.p.r, --tests.passed.raw` | pre-filter option | boolean
`--t.f.v, --tests.failure.visible` | pre-filter option | boolean
`--t.f.e, --tests.failure.expanded` | pre-filter option | boolean
`--t.f.r, --tests.failure.raw` | pre-filter option | boolean
`--t.s.v, --tests.skipped.visible` | pre-filter option | boolean
`--t.s.e, --tests.skipped.expanded` | pre-filter option | boolean
`--t.s.r, --tests.skipped.raw` | pre-filter option | boolean
`--t.e.v, --tests.error.visible` | pre-filter option | boolean
`--t.e.e, --tests.error.expanded` | pre-filter option | boolean
`--t.e.r, --tests.error.raw` | pre-filter option | boolean
`--t.u.v, --tests.unknown.visible` | pre-filter option | boolean
`--t.u.e, --tests.unknown.expanded` | pre-filter option | boolean
`--t.u.r, --tests.unknown.raw` | pre-filter option | boolean

### Examples

```sh
xunit-viewer -r file.xml                 a file
xunit-viewer -r folder                   a folder
xunit-viewer -r folder -i *-broke.xml    ignore
xunit-viewer -r folder -o my-tests.html  rename output
xunit-viewer -r folder -t "My Tests"     change HTML title
xunit-viewer -r folder -c                render in console
xunit-viewer -r folder -c -n             no color in console
xunit-viewer -r folder -w                start watch
xunit-viewer -r folder -w -p 5050        watch at 505
xunit-viewer -r folder --s.s "value"     search suite with term "value"
xunit-viewer -r folder --s.p.v false     hide all passing suites
```

## Node

If you want to run this from a node script instead of command line first install it

`npm i -D xunit-viewer`

Then from your scripts do the following

```js
const XunitViewer = require('xunit-viewer')
const result = XunitViewer(results, {
  ignore: []
  output: ''
  title: ''
  console: false
  noColor: false
  watch: false
  port: 8080
  filter: {
    suites: {
      search: '',
      all: {
        visible: true,
        expanded: true,
        raw: true
      },
      passed: {
        visible: true,
        expanded: true,
        raw: true
      },
      failure: {
        visible: true,
        expanded: true,
        raw: true
      },
      skipped: {
        visible: true,
        expanded: true,
        raw: true
      },
      error: {
        visible: true,
        expanded: true,
        raw: true
      },
      unknown: {
        visible: true,
        expanded: true,
        raw: true
      }
    },
    tests: {
      search: '',
      all: {
        visible: true,
        expanded: true,
        raw: true
      },
      passed: {
        visible: true,
        expanded: true,
        raw: true
      },
      failure: {
        visible: true,
        expanded: true,
        raw: true
      },
      skipped: {
        visible: true,
        expanded: true,
        raw: true
      },
      error: {
        visible: true,
        expanded: true,
        raw: true
      },
      unknown: {
        visible: true,
        expanded: true,
        raw: true
      }
    },
    properties: {
      search: '',
      visible: true,
      expanded: true
    }
  }
})
```

## React Component

If you require the React based component please raise an issue. It was available in `v5` (according to the docs, but no way would it have worked).

## Contributing

1. `npm i` install
2. `npm start` starts the development application
3. `npm run build` update the template
4. `npm run xunit-viewer -- <your options>` which is an alias for `./bin/xunit-viewer <options>`
5. `npm test` run the tests or `npm test -- --watch` to start watching
6. `npm run lint` run eslint
7. `npm run demo` to create demo application
7. `npm run deploy` deploy the demo application
8. `npm run release -- major|minor|patch`  to do a release, default is `patch`

When creating pull request please make sure the tests and linting is passing
