process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const filesize = require('filesize')
const gzipSize = require('gzip-size').sync
const webpack = require('webpack')
const config = require('../config/webpack.config.prod')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const recursive = require('recursive-readdir')
const stripAnsi = require('strip-ansi')

module.exports = (paths) => {
  return new Promise((resolve, reject) => {
    require('dotenv').config({silent: true})

    if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
      process.exit(1)
    }

    function removeFileNameHash (fileName) {
      return fileName
        .replace(paths.appBuild, '')
        .replace(/\/?(.*)(\.\w+)(\.js|\.css)/, (match, p1, p2, p3) => p1 + p3)
    }

    function getDifferenceLabel (currentSize, previousSize) {
      var FIFTY_KILOBYTES = 1024 * 50
      var difference = currentSize - previousSize
      var fileSize = !Number.isNaN(difference) ? filesize(difference) : 0
      if (difference >= FIFTY_KILOBYTES) {
        return chalk.red('+' + fileSize)
      } else if (difference < FIFTY_KILOBYTES && difference > 0) {
        return chalk.yellow('+' + fileSize)
      } else if (difference < 0) {
        return chalk.green(fileSize)
      } else {
        return ''
      }
    }

    recursive(paths.appBuild, (err, fileNames) => {
      var previousSizeMap = (fileNames || [])
        .filter(fileName => /\.(js|css)$/.test(fileName))
        .reduce((memo, fileName) => {
          var contents = fs.readFileSync(fileName)
          var key = removeFileNameHash(fileName)
          memo[key] = gzipSize(contents)
          return memo
        }, {})

      fs.emptyDirSync(paths.appBuild)

      build(previousSizeMap)

      copyPublicFolder()
    })

    function printFileSizes (stats, previousSizeMap) {
      var assets = stats.toJson().assets
        .filter(asset => /\.(js|css)$/.test(asset.name))
        .map(asset => {
          var fileContents = fs.readFileSync(paths.appBuild + '/' + asset.name)
          var size = gzipSize(fileContents)
          var previousSize = previousSizeMap[removeFileNameHash(asset.name)]
          var difference = getDifferenceLabel(size, previousSize)
          return {
            folder: path.join('build', path.dirname(asset.name)),
            name: path.basename(asset.name),
            size: size,
            sizeLabel: filesize(size) + (difference ? ' (' + difference + ')' : '')
          }
        })
      assets.sort((a, b) => b.size - a.size)
      var longestSizeLabelLength = Math.max.apply(null,
        assets.map(a => stripAnsi(a.sizeLabel).length)
      )
      assets.forEach(asset => {
        var sizeLabel = asset.sizeLabel
        var sizeLength = stripAnsi(sizeLabel).length
        if (sizeLength < longestSizeLabelLength) {
          var rightPadding = ' '.repeat(longestSizeLabelLength - sizeLength)
          sizeLabel += rightPadding
        }
        console.log(
          '  ' + sizeLabel +
          '  ' + chalk.dim(asset.folder + path.sep) + chalk.cyan(asset.name)
        )
      })
    }

    function printErrors (errors) {
      console.log(chalk.red('Failed to compile.'))
      console.log()
      errors.forEach(err => {
        console.log(err.message || err)
        console.log()
      })
      reject(errors)
    }

    function build (previousSizeMap) {
      console.log('Creating an optimized production build...')
      webpack(config).run((err, stats) => {
        if (err) {
          printErrors([err])
        }

        if (stats.compilation.errors.length) {
          printErrors(stats.compilation.errors)
        }

        if (process.env.CI && stats.compilation.warnings.length) {
          printErrors(stats.compilation.warnings)
        }

        console.log(chalk.green('Compiled successfully.'))
        console.log()

        console.log('File sizes after gzip:')
        console.log()
        printFileSizes(stats, previousSizeMap)
        console.log()

        resolve()
      })
    }

    function copyPublicFolder () {
      fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml
      })
    }
  })
}
