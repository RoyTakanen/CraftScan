const Netmask = require('netmask').Netmask
const colors = require('colors/safe')
// const { format, toHTML } = require('minecraft-motd-util');
const express = require('express')

const app = express()
 
app.get('/', (req, res) => {
  res.json({
      message: "This is the API endpoint for CraftScan. Check the documentation at <insert documentation url here>."
  })
})

app.get('/ip', (req, res) => {
    res.json({
        ip: req.ip
    })
})

app.get('/worker/subnet', (req, res) => {
    const workerIp = req.ip
    res.json({
        workerIp
    })
})
 
app.listen(3000, '0.0.0.0')

// const block = new Netmask('109.204.224.0/24');
// console.log(colors.yellow(`Received ${block.size} ips to scan.`))

// block.forEach((ip, long, index) => {
//     //scan(ip, long, index)
// });

// console.log(block.next())