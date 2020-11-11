const path =require('path')

//Base file name
console.log(path.basename(__filename))
// /Users/svetlanarovinsky/projects/node-crash-course/refrence/path_demo.js

//Directory name
console.log(path.dirname(__filename))
// /Users/svetlanarovinsky/projects/node-crash-course/refrence

//File extension
console.log(path.extname(__filename))
// .js

//Create path object
console.log(path.parse(__filename))
// { root: '/',
//   dir:
//    '/Users/svetlanarovinsky/projects/node-crash-course/refrence',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo' }

console.log(path.parse(__filename).base)
//  path_demo.js

//Concatenate paths if you want test directory name and html file->  ../test/hello.html
console.log(path.join(__dirname, 'test', 'html.js'))
//  /Users/svetlanarovinsky/projects/node-crash-course/refrence/test/html.js