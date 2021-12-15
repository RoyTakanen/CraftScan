const portscanner = require('portscanner')

portscanner.checkPortStatus(25565, 'mc.karanteeni.net', (error, status) => {
  console.log(status)
})