const fs = require('fs');
const path = require('path');

//using async option
//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=>{
//   if(err) throw err;
//   console.log('Folder created..')
// })

// //Create and write to file. If have another write to file under it, 'Hello World" will be over written. To append, can use fs.append and put it inside callback since it is async
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) =>{
//   if(err) throw err;
//   console.log('File writen to..')
// //File append
//   fs.appendFile(path.join(__dirname, '/test', "hello.txt"), "I love Node.js", (err) =>{
//     if(err) throw err;
//     console.log('File added to..')
//   })
// } )


// //Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data)=>{
//   if(err) throw err;
//   console.log(data)
// })


//Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'), 
  path.join(__dirname, '/test', 'newName.txt'), 
  (err)=>{
  if(err) throw err;
  console.log('Filename renamed..')
})
