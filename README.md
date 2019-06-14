# Xunit Viewer

![Icon](https://raw.githubusercontent.com/lukejpreston/xunit-viewer/master/XunitViewerIcon.png)

[![npm version](https://badge.fury.io/js/xunit-viewer.svg)](https://badge.fury.io/js/xunit-viewer)
[![Downloads on npm](http://img.shields.io/npm/dm/xunit-viewer.svg)](https://www.npmjs.com/package/xunit-viewer)

Takes your XMl xunit results and then turns it into a nice single HTML file or renders it into the terminal

Have a look at the [demo](https://lukejpreston.github.io/xunit-viewer/)

## Help Wanted!

In order to make sure this works I am requesting help to get as much test data as possible. If you have some results that you would like to share as test data please create a pull request. Or you can raise and issue.

I would need the following

[] xml files or code block
[] expected results e.g. `10 passing`

The more obscure the data the better

## CLI

You can use xunit-viewer from the command line

### Installation

`npm i -g xunit-viewer`

### Options

View this with `xunit-view --help`

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
`--s.a.v, --suites.all.visible` | pre-filter option | boolean
`--s.a.e, --suites.all.expanded` | pre-filter option | boolean
`--s.a.r, --suites.all.raw` | pre-filter option | boolean
`--s.p.v, --suites.passed.visible` | pre-filter option | boolean
`--s.p.e, --suites.passed.expanded` | pre-filter option | boolean
`--s.p.r, --suites.passed.raw` | pre-filter option | boolean
`--s.f.v, --suites.failure.visible` | pre-filter option | boolean
`--s.f.e, --suites.failure.expanded` | pre-filter option | boolean
`--s.f.r, --suites.failure.raw` | pre-filter option | boolean
`--s.s.v, --suites.skipped.visible` | pre-filter option | boolean
`--s.s.e, --suites.skipped.expanded` | pre-filter option | boolean
`--s.s.r, --suites.skipped.raw` | pre-filter option | boolean
`--s.e.v, --suites.error.visible` | pre-filter option | boolean
`--s.e.e, --suites.error.expanded` | pre-filter option | boolean
`--s.e.r, --suites.error.raw` | pre-filter option | boolean
`--s.u.v, --suites.unknown.visible` | pre-filter option | boolean
`--s.u.e, --suites.unknown.expanded` | pre-filter option | boolean
`--s.u.r, --suites.unknown.raw` | pre-filter option | boolean
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
              expanded: true
              raw: true
          },
          passed: {
              visible: true,
              expanded: true
              raw: true
          },
          failure: {
              visible: true,
              expanded: true
              raw: true
          },
          skipped: {
              visible: true,
              expanded: true
              raw: true
          },
          error: {
              visible: true,
              expanded: true
              raw: true
          },
          unknown: {
              visible: true,
              expanded: true
              raw: true
          }
      },
      tests: {
          search: '',
          all: {
              visible: true,
              expanded: true
              raw: true
          },
          passed: {
              visible: true,
              expanded: true
              raw: true
          },
          failure: {
              visible: true,
              expanded: true
              raw: true
          },
          skipped: {
              visible: true,
              expanded: true
              raw: true
          },
          error: {
              visible: true,
              expanded: true
              raw: true
          },
          unknown: {
              visible: true,
              expanded: true
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

## Component

If you require Component please raise an issue. It was available in v5 (according to the docs, but no way would it have worked)

## Contributing

1. run `npm i` to install
2. `npm start` which will start the development version
3. `npm run build` to update the template
4. `npm run xunit-viewer -- <your options>` to run the local `xunit-viewer`