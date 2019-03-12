import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'

const Files = () => <div className='files card'>
  <header className='card-header'>
    <button className='card-header-icon' aria-label='more options'>
      <span>Files</span>
      <span className='icon'>
        <i className='fas fa-angle-down' />
      </span>
    </button>
  </header>
  <div className='card-content'>
    <div className='tabs is-boxed'>
      <ul>
        <li className='is-active'>
          <a href='/' onClick={(evt) => {
            console.log('open file')
            evt.preventDefault()
          }}>
            <span>file.xml</span>
            <button className='delete is-small' onClick={(evt) => {
              console.log('remove file')
              evt.stopPropagation()
              evt.preventDefault()
            }} />
          </a>
        </li>
        <li>
          <a href='/' className='add-file' onClick={(evt) => {
            console.log('open file')
            evt.preventDefault()
          }}>
            <span className='icon'>
              <i className='fas fa-plus' />
            </span>
          </a>
        </li>
      </ul>
    </div>

    <input className='input files-input' type='text' defaultValue='/this/is/the/full/filename.xml' placeholder='Filename' />
    <CodeMirror
      value={`<?xml version="1.0" encoding="UTF-8"?>
<testsuite tests="3" failures="1" time="0.0160106">
    <testcase name="Is An Error" classname="Error" time="0.00075">
        <error message="There was a error" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error</error>
    </testcase>
</testsuite>`}
      options={{
        mode: 'xml',
        lineNumbers: true
      }}
      onChange={(cm, { text }, value) => {
        console.log('here', text)
      }}
    />
  </div>

</div>

export default Files
