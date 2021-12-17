import portscanner from 'portscanner';
import { Netmask } from 'netmask';
import chalk from 'chalk';
import fetch from 'node-fetch';

const scan = (ip, long, index) => {
    portscanner.checkPortStatus(25565, ip, (error, status) => {
        if (status == 'open') {
            console.log(`Found server at ${ip}`)
        }
    })
}

while (true) {
    const response = await fetch('http://localhost:3000/worker/subnet');
    const data = await response.json();
    
    if (data.banned) {
        console.log(chalk.red(chalk.bold('Banned for submitting too many false positives!')))
        break
    }

    const block = new Netmask(data.subnet);
    console.log(chalk.yellow(`Received ${block.size} ips to scan. (${data.subnet})`))

    block.forEach((ip, long, index) => {
        scan(ip, long, index)
    });
}
