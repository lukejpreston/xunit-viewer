const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const LZUTF8 = require('lzutf8')

const staticDir = path.resolve(__dirname, './static')

const getHTML = (type) => {
  const dir = path.join(staticDir, type)
  return fs.readdirSync(dir)
    .filter(file => file.endsWith(`.${type}`) && !file.includes('runtime'))
    .map(file => fs.readFileSync(path.join(dir, file)).toString())
    .join('\n')
}

module.exports = (logger, files, description, { output = 'index.html', title = 'Xunit Viewer' }, useSockets = false) => {
  const scripts = getHTML('js')
  const styles = getHTML('css')

  const template = Handlebars.compile(fs.readFileSync(path.resolve(__dirname, 'index.html')).toString())

  files = files.map(({ file, contents }) => ({ file, contents: LZUTF8.compress(contents, { outputEncoding: 'Base64' }) }))

  return template({
    files: JSON.stringify(files),
    scripts,
    styles,
    title,
    description,
    useSockets
  })
}
