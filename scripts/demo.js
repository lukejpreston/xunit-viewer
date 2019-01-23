const fs = require('fs-extra')
const path = require('path')
const paths = require('../config/paths')

require('./build')(paths)
  .then(() => {
    let staticPath = path.join(paths.appBuild, 'static/css/static')
    let mediaPath = path.join(paths.appBuild, 'static/media')
    fs.removeSync(staticPath)
    fs.mkdirpSync(staticPath)
    fs.copySync(mediaPath, path.join(staticPath, 'media'))
    console.log('demo is now ready to use')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
