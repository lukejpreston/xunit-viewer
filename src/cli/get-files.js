const fs = require('fs')
const path = require('path')

const getFiles = (logger, ignore, folder, files = []) => {
  if (fs.lstatSync(folder).isDirectory()) {
    fs.readdirSync(folder)
      .map(name => path.join(folder, name))
      .forEach(file => {
        if (fs.lstatSync(file).isDirectory()) files = files.concat(getFiles(logger, ignore, file, files))
        else if (file.endsWith('.xml') && !ignore.some(pattern => file.includes(pattern) || new RegExp(pattern).test(file))) files.push(file)
        else console.log(logger.warning('IGNORING:'), logger.file(file))
      })
  } else {
    return Array.from(new Set([folder]))
  }
  return Array.from(new Set(files))
}

module.exports = (logger, { results, ignore = [] }) => {
  const files = getFiles(logger, ignore, results)
  return files.map(file => ({
    file,
    contents: fs.readFileSync(file).toString()
  }))
}
