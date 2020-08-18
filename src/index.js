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
    <?xml version="1.0" encoding="UTF-8" ?>
    <testsuites>
        <testsuite name="X SUITE ONE" errors="7" tests="10" failures="2" time="0.021">
            <properties>
                <property name="flag-type" value="bug" />
                <property name="flag-content" value="APPLICATION DEFECT" />
                <property name="Has a name" value="true" />
                <property name="URL" value="/test/data.com" />
            </properties>
            <properties>
                <property name="flag-type" value="bug" />
                <property name="flag-content" value="APPLICATION DEFECT" />
                <property name="Has a name" value="true" />
                <property name="URL" value="/test/data.com" />
            </properties>
            <testcase assertions="0" classname="SUITE ONE" name="the first test X" time="0.001">
                <error message="There was a error" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error</error>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the first test" time="0.001">
                <error message="There was a error" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error</error>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the second test" time="0.001">
                <error message="I ignore this" type="when inner message">&lt;i&gt;WITH&lt;/i&gt;&lt;b&gt;HTML&lt;/b&gt;</error>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the third test" time="0.012">
                <passed message="I ignore" type="this anyway">For some reason a passing message</passed>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the fouth test" time="0.001">
                <error message="There was a error 1" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error 1</error>
                <error message="There was a error 2" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error 2</error>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the fifth test" time="0.002">
                <error message="This one has no inner message" type="java.lang.RuntimeException"></error>
            </testcase>
            <testcase assertions="0" classname="SUITE ONE" name="the sixt test" time="0.001">
                <error message="This one has no inner message or type"></error>
            </testcase>
            </testsuite>
          <testsuite name="SUITE TWO" errors="0" tests="6" failures="0" time="0.021">
            <testcase assertions="0" classname="SUITE ONE" name="the sixt test" time="0.001">
                <bacon message="This one has no inner message or type"></bacon>
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the first test" time="0.001">
                <error type="This one has no inner message or message"></error>
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the second test" time="0.001">
                <skipped></skipped>
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the third test" time="0.012">
                <failure></failure>
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the fouth test" time="0.001">
              <error message="<i>WITH HTML</i>" type="<b>NO INNER</b>"></error>
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the fifth test" time="0.002">
            </testcase>
            <testcase assertions="0" classname="SUITE TWO" name="the sixt test" time="0.001">
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
