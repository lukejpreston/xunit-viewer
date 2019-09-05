module.exports = {
  name: 'output',
  script: './bin/xunit-viewer',
  args: '-r data -o output/sample.html -w',
  autorestart: true,
  watch: true,
  ignore_watch: ['data', 'output'],
  env: {
    NODE_ENV: 'development'
  }
}
