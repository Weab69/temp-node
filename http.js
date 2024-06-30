const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our story')
    }
    res.end(`
        <h1>Oops! we cant find the page u looking for</h1>
        <a href="/">home</a>
    `)
})

server.listen(5000)