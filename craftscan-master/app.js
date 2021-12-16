const portscanner = require('portscanner')
const Netmask = require('netmask').Netmask
const colors = require('colors/safe')
const mcpinger = require("mcpinger")
// const { format, toHTML } = require('minecraft-motd-util');

const block = new Netmask('109.204.224.0/24');
console.log(colors.yellow(`Received ${block.size} ips to scan.`))

// Switch to class and use add to save to mongo

const scan = (ip, long, index) => {
    portscanner.checkPortStatus(25565, ip, (error, status) => {
        if (status == 'open') {
            console.log(`Confirmed server at ${ip}`)
        }
    })
}

block.forEach((ip, long, index) => {
    scan(ip, long, index)
});