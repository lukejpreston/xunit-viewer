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
    contents: LZUTF8.compress(`<testsuite name='DELETED.BasicWebViewControllerTests' tests='8' failures='1'>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testCompletionIsCalledWhenResettingWebContentEarly' time='0.010'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testFullResetWebViewURL' time='0.011'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testIsBasedOnHostMatchingURLReturnsFalseWhenHostDoesNotMatch' time='0.008'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testIsBasedOnHostMatchingURLReturnsFalseWithNilDefaultURL' time='0.008'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testIsBasedOnHostMatchingURLReturnsTrueWhenHostMatches' time='0.008'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testLoadingFragmentURLSession' retries='1'>

      <failure message='Asynchronous wait failed: Exceeded timeout of 5 seconds, with unfulfilled expectations: &quot;testLoadingFragmentURLSession()&quot;.'>

        

        [DELETED]/BasicWebViewControllerTests.swift:103 

      </failure>

    </testcase>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testResetWebContentWithDefaultURL' time='1.481'/>

    <testcase classname='DELETED.BasicWebViewControllerTests' name='testResetWebContentWithNilDefaultURL' time='1.458'/>

  </testsuite>

`, { outputEncoding: 'Base64' })
  }]
}

files = files.map(({ file, contents }) => ({
  file,
  contents: LZUTF8.decompress(contents, { inputEncoding: 'Base64' })
}))

ReactDOM.render(<App files={files} />, document.getElementById('root'))
