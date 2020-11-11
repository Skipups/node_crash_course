const http = require('http');
const path= require('path')
const fs= require('fs')


//Createre server object
const server = http.createServer((req, res)=>{
console.log('req.url',req.url)

// if(req.url === '/'){

//   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
//     if(err) throw err
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(content)
//   })
// } 
// if(req.url === '/api/users'){
// const users =[
//   {name: 'Svetlana Pup', age:36},
//   {name: 'Alyssa Pup', age:29}
// ]
  
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify(users))

// // res.writeHead(200, {'Content-Type': 'text:html'})
// //   res.end('<h1>home page</h1>')
// }

//Build dynamic file path set to the requrest URL
let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url );

//need to set content type, get extension of file type
let extname = path.extname(filePath)
console.log('filePath', filePath,'extname', extname)

//Intitial context type
let contentType="text/html"

//Check ext and set content type
switch (extname) {
  case ".js":
    contentType = "text/javascript";
    break;
  case ".css":
    contentType = "text/css";
    break;
  case ".json":
    contentType = "application/json";
    break;
  case ".png":
    contentType = "image/png";
    break;
  case ".jpg":
    contentType = "image/jpg";
    break;
}

//Read file
fs.readFile(filePath, (err, content)=>{
  if(err){
    if(err.code == 'ENOENT'){
      //Page not found
      fs.readFile(path.join(__dirname, '/public', '404.html'),(err, content)=>{
        if(err) throw err
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(content, 'utf8')
      })
    } else{
      //Some server error
      res.writeHead(500)
      res.end(`Server Error: ${err.code}`)
    }
  }else{
    //Success
    res.writeHead(200, {'Content-Type':  contentType})
    res.end(content, 'utf8')
  }

})

})

// first looks for enviornment variable
const PORT=process.env.PORT || 5000

server.listen(PORT, ()=>{
  console.log('Sever running on port:', PORT)
})