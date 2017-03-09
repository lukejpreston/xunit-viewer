export default (setState) => {
  if (!window.hasOwnProperty('io')) return

  const socket = window.io()

  socket.on('suites', (suites) => {
    setState(suites)
  })
}
