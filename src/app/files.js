// import React from 'react'
// import { UnControlled as CodeMirror } from 'react-codemirror2'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/mode/xml/xml'

// const ToggleFiles = ({ onClick }) => <button className='card-header-icon' onClick={onClick}>
//   <h6 className='subtitle is-5'>
//     <span className='icon'>
//       <i className='fas fa-code' />
//     </span>
//     <span>Files</span>
//   </h6>
//   <span className='icon'>
//     <i className='fas fa-angle-down' />
//   </span>
// </button>

// const Files = ({ active = false, setActive, files = [] }) => {
//   return <div className={`files card is-${active ? 'active' : 'inactive'}`}>
//     <header className='card-header'>
//       <ToggleFiles device='tablet' onClick={() => { setActive(!active) }} />
//     </header>
//     <div className='card-content'>
//       <div className='tabs is-boxed'>
//         <ul>
//           <li className='is-inactive'>
//             <a
//               href={active ? '/' : null} onClick={(evt) => {
//                 console.log('open file')
//                 evt.preventDefault()
//               }}
//             >
//               <span>file.xml</span>
//               <button
//                 disabled={!active} className='delete is-small' onClick={(evt) => {
//                   console.log('remove file')
//                   evt.stopPropagation()
//                   evt.preventDefault()
//                 }}
//               />
//             </a>
//           </li>
//           <li className='is-active'>
//             <a
//               href={active ? '/' : null} onClick={(evt) => {
//                 console.log('open file')
//                 evt.preventDefault()
//               }}
//             >
//               <span>file.xml</span>
//               <button
//                 disabled={!active} className='delete is-small' onClick={(evt) => {
//                   console.log('remove file')
//                   evt.stopPropagation()
//                   evt.preventDefault()
//                 }}
//               />
//             </a>
//           </li>
//           {/* <li>
//             <a href={active ? '/' : null} className='add-file' onClick={(evt) => {
//               console.log('add a new file')
//               evt.preventDefault()
//             }}>
//               <span className='icon'>
//                 <i className='fas fa-plus' />
//               </span>
//             </a>
//           </li> */}
//         </ul>
//       </div>

//       <input className='input files-input' type='text' defaultValue='/this/is/the/full/filename.xml' placeholder='Filename' disabled={!active} />
//       {active
//         ? <CodeMirror
//         value={`<?xml version="1.0" encoding="UTF-8"?>
// <testsuite tests="3" failures="1" time="0.0160106">
//     <testcase name="Is An Error" classname="Error" time="0.00075">
//         <error message="There was a error" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error</error>
//     </testcase>
// </testsuite>`}
//         options={{
//           mode: 'xml',
//           lineNumbers: true
//         }}
//         onChange={(cm, { text }, value) => {

//         }}
//       />
//         : null}
//     </div>

//   </div>
// }

// export default Files

const Files = () => null

export default Files
