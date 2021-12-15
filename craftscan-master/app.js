const portscanner = require('portscanner')
const Netmask = require('netmask').Netmask
const colors = require('colors/safe')
const mcpinger = require("mcpinger")
const geoip = require('geoip-lite');
// const { format, toHTML } = require('minecraft-motd-util');

const block = new Netmask('109.204.224.0/24');
console.log(colors.yellow(`Received ${block.size} ips to scan.`))

// Switch to class and use add to save to mongo

const checkMotd = (ip) => {
    mcpinger.java({ host: ip }).then((res) => {
        // Save this to MongoDB: console.log(res)


        // console.log(colors.green('Found motd:'))
        // console.log(`Version: ${res.version}`)
        // console.log(`Motd text: ${res.motd.text}`)
        // console.log(`Online: ${res.onlinePlayerCount}/${res.maxPlayerCount}`)
        // console.log(`Protocol: ${res.protocolVersion}`)
    })
}

const checkGeoIp = (ip) => {
    geo = geoip.lookup(ip)
    console.log(geo)
}

const scan = (ip, long, index) => {
    portscanner.checkPortStatus(25565, ip, (error, status) => {
        if (status == 'open') {
            console.log(`Confirmed server at ${ip}`)
            checkMotd(ip)
            checkGeoIp(ip)
        }
    })
}

block.forEach((ip, long, index) => {
    scan(ip, long, index)
});