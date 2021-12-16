const geoip = require('geoip-lite');
const portscanner = require('portscanner')
const mcpinger = require("mcpinger")

class MinecraftServer {
    constructor(serverIp, workerIp) {
        this.serverIp = serverIp
        this.workerIp = workerIp
        this.timestamp = + new Date()

        this.checkIfUp()
    }

    checkIfUp() {
        portscanner.checkPortStatus(25565, this.serverIp, (error, status) => {
            if (status == 'open') {
                this.portOpen = true
            }
        })
    }

    checkGeoIp() {
        this.serverGeo = geoip.lookup(this.serverIp)
        this.workerGeo = geoip.lookup(this.workerIp)
    }

    checkMcping() {
        mcpinger.java({ host: this.serverIp }).then((mcping) => {
            this.mcping = mcping
        })
    }

    save() {

    }
}