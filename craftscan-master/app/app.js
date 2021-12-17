require('dotenv').config()
const Netmask = require('netmask').Netmask
const colors = require('colors/safe')
// const { format, toHTML } = require('minecraft-motd-util');
const express = require('express')
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URL);
const app = express()

const main = async () => {
    await client.connect()

    const db = client.db('craftscan')
    const ip2locationCol = db.collection('ip2location')

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

    // Search which country IP belongs to: { ip_from: { $lte: 1425591560 }, ip_to: { $gte: 1425591560 } }

    app.get('/worker/subnet', async (req, res) => {
        const workerIp = req.ip
        const subnet = await ip2locationCol.findOne({ country_code: "FI" })
        res.json({
            workerIp,
            subnet
        })
    })

    app.listen(process.env.PORT, '0.0.0.0')
}

main()

// const block = new Netmask('109.204.224.0/24');
// console.log(colors.yellow(`Received ${block.size} ips to scan.`))

// block.forEach((ip, long, index) => {
//     //scan(ip, long, index)
// });

// console.log(block.next())