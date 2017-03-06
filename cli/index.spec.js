const cli = require('.')

describe('cli', () => {
  it('works', () => {
    cli.run({
      ignore: [
        'node_modules',
        'invalid.xml',
        'blank_file.xml'
      ]
    })
  })
})
