// Write a NodeJs script to create two listeners for a common event. Call their respective callbacks.
//  Print no. of events associated with an emitter.
//  Remove one of the listener and  print no of remaining listeners.

const EventEmitter = require('events')
const Event = new EventEmitter()
var l1 = () => { console.log("I am Listener 1") }
var l2 = () => { console.log("I am listener 2") }
Event.addListener("task", l1)
Event.on("task", l2)
let count = Event.listenerCount("task")
console.log(count + " for task event")
Event.emit("task")
Event.removeListener('task', l1)
count = Event.listenerCount("task")
console.log(count + " for task event after removing")
Event.emit("task")

