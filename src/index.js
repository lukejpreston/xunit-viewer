import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import './app/index.css'
import App from './app/app.js'

import LZUTF8 from 'lzutf8'

let files = window.files || []
const title = window.title || 'Xunit Viewer'
const brand = window.brand || null

if (process.env.NODE_ENV === 'development') {
  files = [{
    file: '/path/to/file/complete.xml',
    contents: LZUTF8.compress(`
    <?xml version="1.0" encoding="UTF-8"?>
<testsuites>
    <testsuite name="plan1" tests="1" failures="1" time="0.0160106">
      <testcase name="It Is A Fokin Failure" classname="Failing" time="0.012011200000000001">
        <error>Error message</error>
        <system-out>Some messgae</system-out>
        <failure type="Failure">FILENAME:XX</failure>
      </testcase>
    </testsuite>
    <testsuite name="plan2" tests="1" failures="1" time="0.0160106">
      <testcase name="It Is A Fokin Failure" classname="Failing" time="0.012011200000000001">
        <error>Error message</error>
        <system-out>Some messgae</system-out>
        <failure type="Failure">FILENAME:XX</failure>
      </testcase>
    </testsuite>
</testsuites>
`, { outputEncoding: 'Base64' })
  }]
}

files = files.map(({ file, contents }) => ({
  file,
  contents: LZUTF8.decompress(contents, { inputEncoding: 'Base64' })
}))

ReactDOM.render(<App files={files} title={title} brand={brand} />, document.getElementById('root'))
