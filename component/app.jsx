import React from 'react'
import ReactDOM from 'react-dom'
import XunitViewer from './xunit-viewer'

ReactDOM.render(
  <XunitViewer
    suites={window.suites}
    title='bacon 22' />,
  document.getElementById('root')
)
