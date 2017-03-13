const path = require('path')
const recurse = require('recursive-readdir')
const fs = require('fs-extra')
const svgToReact = require('svg-to-react')

const icons = path.resolve(__dirname, '../component/icons')

recurse(icons, ['!*.svg'], (err, files) => {
  if (err) console.log(err)
  files.forEach(file => {
    let svg = fs.readFileSync(file).toString()
    let output = svgToReact.convert(svg)
    output = (output).toString()
    let start = `import React from 'react'

    export default `
    output = start + output
    fs.writeFileSync(file.replace('svg', 'js'), output)
  })
  console.log('done')
})
