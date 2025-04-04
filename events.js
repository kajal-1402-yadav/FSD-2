const EventEmitter = require('events')
const Event=new EventEmitter()
Event.on('SayName',()=>{
    console.log('Jashu WEDS Khushu 🕺💃👼')
    Event.emit('StatusPage','chintu','Khushu')
})

Event.on('StatusPage',(code,msg)=>{
    console.log(`Jashu has ${code} with ${msg}`)
})
Event.emit('SayName')

