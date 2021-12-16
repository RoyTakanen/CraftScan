const Netmask = require('netmask').Netmask
const colors = require('colors/safe')
// const { format, toHTML } = require('minecraft-motd-util');

const block = new Netmask('109.204.224.0/24');
console.log(colors.yellow(`Received ${block.size} ips to scan.`))



block.forEach((ip, long, index) => {
    scan(ip, long, index)
});