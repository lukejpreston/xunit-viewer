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
    contents: LZUTF8.compress(`<?xml version="1.0" encoding="utf-8"?>
    <?xml version="1.0" encoding="UTF-8"?>
<testsuite tests="2" failures="1" time="0.0160106">
<properties>
                <property name="x" value="y" />
                <property name="a" value="b" />
            </properties>
    <testcase classname="test_function" file="test_function.py" line="0" name="test_function" time="0.0009">
        <properties>
            <property name="example_key" value="1"/>
        </properties>
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
