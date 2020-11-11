const url = require('url')

const myUrl= new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

//Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())
// http://mywebsite.com:8000/hello.html?id=100&status=active

//Host (root domain)
console.log(myUrl.host)
//  mywebsite.com:8000

//Hostname (does not get port if there was a port after ..com/:8000)
console.log(myUrl.hostname)
//  mywebsite.com

//Pathname
console.log(myUrl.pathname)
//  /hello.html
//Serialized query
console.log(myUrl.search)
//  ?id=100&status=active

//Make object from search params
console.log(myUrl.searchParams)
//  URLSearchParams { 'id' => '100', 'status' => 'active' }

//Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
//  URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

//Loop through params
myUrl.searchParams.forEach((name,val)=> console.log( `${name}: ${val}`))
//  100: id
//  active: status
//  123: abc
