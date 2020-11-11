const EventEmitter = require('events')
const uuid= require('uuid')
const fs = require('fs');
const path = require('path');

class Logger extends EventEmitter{
  log(msg){
    //Call event
    this.emit('message', {id:uuid.v4(), msg:msg})
  }
}

const logger= new Logger()

logger.on('message', (data)=> {
  
  console.log('Called Listener:', data)
 fs.appendFile(path.join(__dirname, '/reference/test', "newName.txt"),JSON.stringify(data), (err,data)=>{
   if(err) throw err
   console.log(data)
 })

})

logger.log('Hey there Svet!')