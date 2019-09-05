module.exports = {
  name: 'console',
  script: './bin/xunit-viewer',
  args: '-r data -o false -w -c',
  autorestart: true,
  watch: true,
  ignore_watch: ['data', 'output'],
  env: {
    NODE_ENV: 'development'
  }
}
