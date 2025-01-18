const http = require('http')

http.createServer((req, res)=>{
    res.write('Welcome to cybrom')
    res.end()
}).listen(8080)