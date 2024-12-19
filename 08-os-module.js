//for interaction with operation system as welll as the server 
const os = require('os')

//info abou current user
const user = os.userInfo()
// console.log(user);


//method return the sys uptime in seconds
console.log(`the Sys Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freemem : os.freemem(),

}
console.log(currentOS);

