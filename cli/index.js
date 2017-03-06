const changeCase = require('change-case')

module.exports = {
    run ({
        port = false,
        results = '',
        save = '',
        title = 'Xunit Viewer'
    }) {
        title = changeCase.title(title)

        if (port) {
            console.log('start a port and some socket things')
        }

        if (results) {
            console.log('use their file or folder')
        }

        if (save) {
            console.log('save the file to here')
        }

        console.log('x read the xml or folder of xml')
        console.log('x parse the xml')
        console.log('x render the html')
        console.log('x save html')
        console.log('x listen to xml or folder of xml - push changes using sockets')
    }
}
