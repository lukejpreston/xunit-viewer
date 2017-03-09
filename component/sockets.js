export default (setState) => {
  if (!window.hasOwnProperty('io')) return

  const socket = window.io()

  socket.on('suites', (suites) => {
    setState(suites)
  })

  socket.on('reload:all', () => {
    console.log('all')
    window.location.reload()
  })

  socket.on('reload:style', (style) => {
    document.querySelector('style').innerHTML = style
  })
}
