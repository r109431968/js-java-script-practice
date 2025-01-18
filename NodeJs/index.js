const http = require('http')

http.createServer(function(req, res){
    res.write("<h1> This is My first Program !!!")
    res.end()
}).listen(8080)