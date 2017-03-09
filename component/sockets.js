export default (setState) => {
  if (!window.hasOwnProperty('io')) return

  const socket = window.io()

  socket.on('suites', (suites) => {
    setState(suites)
  })

  socket.on('reload', ({style}) => {
    console.log('here')
    if (style) document.querySelector('style').innerHTML = style
    else window.location.reload()
  })
}
