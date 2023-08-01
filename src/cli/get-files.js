import fs from 'fs'
import path from 'path'
import languageEncoding from 'detect-file-encoding-and-language'

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

export default async (logger, { results, ignore = [] }) => {
  const files = getFiles(logger, ignore, results)
  const readFiles = []
  for (const file of files) {
    const { encoding } = await languageEncoding(file)
    readFiles.push({
      file,
      contents: fs.readFileSync(file).toString((encoding || 'utf8').toLowerCase().replace(/-/g, ''))
    })
  }

  return readFiles
}
