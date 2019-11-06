export default (setState) => {
  if (!Object.prototype.hasOwnProperty.call(window, 'io')) return

  const socket = window.io()

  socket.on('suites', (suites) => {
    console.log('Update suites,', new Date())
    setState(suites)
  })

  socket.on('reload', ({ style, code }) => {
    if (style) document.querySelector('style').innerHTML = style
    else {
      console.log('reloading')
      window.location.reload()
    }
  })
}
