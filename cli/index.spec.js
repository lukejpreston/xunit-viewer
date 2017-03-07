const cli = require('.')

describe('cli', () => {
  it('works', () => {
    cli.run({
      results: 'data',
      ignore: [
        'node_modules',
        'invalid.xml',
        'blank_file.xml'
      ],
      watch: true
    })
  })
})
