const cli = require('.')

describe('cli', () => {
  it('works', () => {
    cli.run({
      results: 'data/complete_multi_suites.xml',
      ignore: [
        'node_modules',
        'invalid.xml',
        'blank_file.xml'
      ]
    })
  })
})
