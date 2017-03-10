export default (setState) => {
  if (!window.hasOwnProperty('io')) return

  const socket = window.io()

  socket.on('suites', (suites) => {
    setState(suites)
  })

  socket.on('reload', ({style, code}) => {
    if (style) document.querySelector('style').innerHTML = style
    else {
      console.log('reloading')
      window.location.reload()
    }
  })
}
