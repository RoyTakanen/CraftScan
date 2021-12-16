# CraftScan

Minecraft server lists which tests every 25565 port on the internet. It is also possible for you (yes **you**) to run your own instance and help the site. 

Coming to some free .ga-domain in the near future!

## Master

Hosts the API and listens for worker ip requests and submissions. 

**Uses:**

- Redis (information about ip assignments and workers)
- MongoDB (motd and worker who scanned that)
- Express

### One client lifecycle

1. Worker requests lists of ip addresses. These will be assigned to Redis for the worker's ip and locked from other users.
2. Worker checks if ports are open and sends a list of open ip's to master (consider sending after every one of them have been scanned => keep timestamp in case the scan takes long and one of the ip's goes down => no ban). The master checks if port is open and scans the Minecraft server motd from it. In case the port is closed the server adds a failure to for the ip to Redis. If there are 5 failures in one hour the ip will be marked as a spam and blocked for a month. If the port is not assigned for the worker, master will refuse to process it (someone runs a worker that only scans his own server => prohibits data polarization). Assignments are released after 30 minutes (worker has half an hour to process given list).
3. Repeat


### API


1. Top workers
2. Worker count
3. Worker status
4. Request ip unblock (only 3 tries per month)
5. Request country scan (only from worker ip's)
6. Get servers by query

## Worker

Gets list of IP addresses from the master and test port 25565 on them. If it is open the ip will be submitted to the master. The program runs in a docker container which makes it easy to deploy it almost anywhere. 

---

This site or product includes IP2Location LITE data available from [https://lite.ip2location.com](https://lite.ip2location.com).