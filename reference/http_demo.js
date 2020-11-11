const http = require('http')
const PORT= 5000

//Create server object
http.createServer((req, res)=> {
  //Write response on browser
  res.write('Hello Svetlana!')
  res.end()
}).listen(PORT, ()=>{
  console.log('listening on port:', PORT)
})