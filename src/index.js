import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import './app/index.css'
import App from './app/app.js'

let files = window.files || []

if (process.env.NODE_ENV === 'development') {
  files = [{
    file: '/path/to/file/complete.xml',
    contents: `<testsuites>
    <testsuite errors="0" failures="0" hostname="cerberus.fox" name="pytest" skipped="0" tests="6" time="0.078" timestamp="2020-01-22T16:02:49.321656">
        <testcase classname="tests.test_config" name="test_json_resolution" time="0.001"/>
        <testcase classname="tests.test_config" name="test_defaults" time="0.001"/>
        <testcase classname="tests.test_integration" name="test_config_relative_path" time="0.012">
            <system-out>
cwd: /tmp/tmpyn7k46sd emanate --source /tmp/tmpwz2h7glq/src '/tmp/tmpwz2h7glq/src/foo' -> '/tmp/tmpwz2h7glq/dest/foo' cwd: /tmp/tmpetkvkfdw emanate --source src '/tmp/tmpetkvkfdw/src/foo' -> '/tmp/tmpetkvkfdw/dest/foo' cwd: /tmp/tmpq7vws4le/src emanate '/tmp/tmpq7vws4le/src/foo' -> '/tmp/tmpq7vws4le/dest/foo'
            </system-out>
        </testcase>
        <testcase classname="tests.test_integration" name="test_no_config" time="0.012">
            <system-out>
cwd: /tmp/tmpuv0uzm7s emanate --source /tmp/tmp_uh8tzdz/src --dest /tmp/tmp_uh8tzdz/dest '/tmp/tmp_uh8tzdz/src/foo' -> '/tmp/tmp_uh8tzdz/dest/foo' '/tmp/tmp_uh8tzdz/src/bar/baz' -> '/tmp/tmp_uh8tzdz/dest/bar/baz' cwd: /tmp/tmpk99ai9r0 emanate --source src --dest /tmp/tmpk99ai9r0/dest '/tmp/tmpk99ai9r0/src/foo' -> '/tmp/tmpk99ai9r0/dest/foo' '/tmp/tmpk99ai9r0/src/bar/baz' -> '/tmp/tmpk99ai9r0/dest/bar/baz' cwd: /tmp/tmprxyuze4g/src emanate --dest /tmp/tmprxyuze4g/dest '/tmp/tmprxyuze4g/src/foo' -> '/tmp/tmprxyuze4g/dest/foo' '/tmp/tmprxyuze4g/src/bar/baz' -> '/tmp/tmprxyuze4g/dest/bar/baz'
            </system-out>
        </testcase>
        <testcase classname="tests.test_integration" name="test_empty_config" time="0.011">
            <system-out>
cwd: /tmp/tmp2gjl2wj_ emanate --source /tmp/tmp1t7j_ote/src --dest /tmp/tmp1t7j_ote/dest '/tmp/tmp1t7j_ote/src/foo' -> '/tmp/tmp1t7j_ote/dest/foo' cwd: /tmp/tmp9b40pw3b emanate --source src --dest /tmp/tmp9b40pw3b/dest '/tmp/tmp9b40pw3b/src/foo' -> '/tmp/tmp9b40pw3b/dest/foo' cwd: /tmp/tmpfmnr88qv/src emanate --dest /tmp/tmpfmnr88qv/dest '/tmp/tmpfmnr88qv/src/foo' -> '/tmp/tmpfmnr88qv/dest/foo'
            </system-out>
        </testcase>
        <testcase classname="tests.test_integration" name="test_clean" time="0.013">
            <system-out>
cwd: /tmp/tmp9q8tpxi2 emanate --source /tmp/tmpn4lvoqq7/src clean '/tmp/tmpn4lvoqq7/dest/foo' cwd: /tmp/tmp0dzkb_z5 emanate --source src clean '/tmp/tmp0dzkb_z5/dest/foo' cwd: /tmp/tmpsueno4qa/src emanate clean '/tmp/tmpsueno4qa/dest/foo'
            </system-out>
        </testcase>
    </testsuite>
        <testsuite name="SUITE ONE" errors="7" tests="10" failures="2" time="0.021">
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

`
  }]
}

ReactDOM.render(<App files={files} />, document.getElementById('root'))
