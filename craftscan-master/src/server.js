const geoip = require('geoip-lite');

class MinecraftServer {
    constructor(serverIp, workerIp) {
        this.serverIp = serverIp
        this.workerIp = workerIp
        this.timestamp = + new Date()
    }

    checkGeoIp(ip) {
        this.geo = geoip.lookup(ip)
    }

    checkMotd(ip) {
        mcpinger.java({ host: ip }).then((mcping) => {
            this.mcping = mcping
        })
    }

    save() {

    }
}