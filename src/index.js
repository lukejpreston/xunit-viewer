import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all.js'

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
<testsuite tests="1" failures="1" time="0.0160106">
  <testcase name="It Is A Failure" classname="Failing" time="0.012011200000000001">
    <error>Error message</error>
    <system-out>Some messgae</system-out>
    <failure type="Failure">FILENAME:XX</failure>
  </testcase>
</testsuite>
`, { outputEncoding: 'Base64' })
  }]
}

files = files.map(({ file, contents }) => ({
  file,
  contents: LZUTF8.decompress(contents, { inputEncoding: 'Base64' })
}))

ReactDOM.render(<App files={files} title={title} brand={brand} />, document.getElementById('root'))
