const http = require('http')
const port = 4000
const browserify = require('browserify')
const fs = require('fs')
const server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  fs.readFile('index.html',function(error,data){
    if(error){
      res.writeHead(404)
      res.write('Error:File Bot Found')
    } else{
      res.write(data)
    }
    res.end()
  })
})
server.listen(port, function(error){
  if(error){
    console.log('something went wrong',error)
  }else{
    console.log('server is running on port'+ port)
  }
})
