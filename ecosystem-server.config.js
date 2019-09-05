module.exports = {
  name: 'server',
  script: './bin/xunit-viewer',
  args: '-r data -o false -p 3030',
  autorestart: true,
  watch: true,
  ignore_watch: ['data', 'output'],
  env: {
    NODE_ENV: 'development'
  }
}
