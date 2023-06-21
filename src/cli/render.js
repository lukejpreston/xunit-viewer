import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import LZUTF8 from 'lzutf8'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const staticDir = path.resolve(__dirname, './static')

const getHTML = (type) => {
  const dir = path.join(staticDir, type)
  return fs.readdirSync(dir)
    .filter(file => file.endsWith(`.${type}`) && !file.includes('runtime'))
    .map(file => fs.readFileSync(path.join(dir, file)).toString())
    .join('\n')
}

export default (logger, files, description, { title = 'Xunit Viewer', brand, favicon }, useSockets = false) => {
  const scripts = getHTML('js')
  const styles = getHTML('css')

  const template = Handlebars.compile(fs.readFileSync(path.resolve(__dirname, 'index.html')).toString())

  files = files.map(({ file, contents }) => ({ file, contents: LZUTF8.compress(contents, { outputEncoding: 'Base64' }) }))

  return template({
    files: JSON.stringify(files),
    scripts,
    styles,
    title,
    icon: brand || 'https://lukejpreston.github.io/xunit-viewer/icon.png',
    favicon: favicon || 'https://lukejpreston.github.io/xunit-viewer/favicon.ico',
    brand,
    description,
    useSockets
  })
}
