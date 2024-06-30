const os = require('os')

//user info
const user = os.userInfo()
console.log(user)

//computer run time
console.log('rum time is '+os.uptime()+' seconds')
const currentos={
name:os.type(),
release:os.release(),
freememory:os.freemem(),
totalmemory:os.totalmem()
}

console.log(currentos)

