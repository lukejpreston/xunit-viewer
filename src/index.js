import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import './app/index.css'
import App from './app/app.js'

import LZUTF8 from 'lzutf8'

let files = window.files || []

if (process.env.NODE_ENV === 'development') {
  files = [{
    file: '/path/to/file/complete.xml',
    contents: LZUTF8.compress(`<testsuite name="testcase with properties">
    <testcase name='with properties' message='message 1' retries='1'>

        <properties>
            <property name="name only"/>
        </properties>
        <properties>
            <property name="prop 1" value="value 1"/>
            <property name="prop 1">value 2</property>
            <property name="prop 1"/>
            <property name="prop 2" value="value"/>
            <property>value with no name</property>
            <property/>
        </properties>
        <properties>
            <property name="seperate props" value="value"/>
        </properties>
        <properties>value only</properties>
        <properties/>
    </testcase>
</testsuite>

`, { outputEncoding: 'Base64' })
  }]
}

files = files.map(({ file, contents }) => ({
  file,
  contents: LZUTF8.decompress(contents, { inputEncoding: 'Base64' })
}))

ReactDOM.render(<App files={files} />, document.getElementById('root'))
