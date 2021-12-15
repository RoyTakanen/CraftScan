const portscanner = require('portscanner')
const Netmask = require('netmask').Netmask
const colors = require('colors/safe')

const block = new Netmask('109.204.224.0/24');
console.log(colors.yellow(`Received ${block.size} ips to scan.`))

const scan = (ip, long, index) => {
    portscanner.checkPortStatus(25565, ip, (error, status) => {
        if (status == 'open') {
            console.log(`Found server at ${ip}`)
        }
    })
}

block.forEach((ip, long, index) => {
    scan(ip, long, index)
});