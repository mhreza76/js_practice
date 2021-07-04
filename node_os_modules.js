console.clear();
const os = require('os');
console.log(os.platform())
console.log(os.arch())
console.log(os.hostname())
// console.log(os.cpus().length)
console.log(os.freemem() / 1020 / 1024 / 1024)
console.log(os.totalmem() / 1020 / 1024 / 1024)
// console.log(os.networkInterfaces())
console.log(os.tmpdir())
console.log(os.uptime() / 60 / 60)
console.log(os.version())
