const fs = require('fs-extra')
const path = require('path')
const paths = require('../config/paths')

require('./build')(paths)
  .then(() => {
    const staticPath = path.join(paths.appBuild, 'static/css/static')
    const mediaPath = path.join(paths.appBuild, 'static/media')
    fs.removeSync(staticPath)
    fs.mkdirpSync(staticPath)
    fs.copySync(mediaPath, path.join(staticPath, 'media'))
    console.log('demo is now ready to use')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
