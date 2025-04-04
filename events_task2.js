// Write a node js script to write the text “This is data” to new.txt file. After that append the text
//  “that is data” to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, 
// print the line “Thanks for using my program” on console. All read/write operations are asynchronous.
var fs = require('fs')
const EventEmitter = require('events')
const Event = new EventEmitter()
Event.on('write', () => {
    fs.writeFile('new.txt', "This is data",
        (err) => {
            if (err) {
                console.log("Error...")
            }
            else {
                Event.emit('append')
            }
        }
    )
})
Event.on('append', () => {
    fs.writeFile('new.txt', "That is data",
        (err) => {
            if (err) {
                console.log("Error...")
            }
            else {
                Event.emit('read')
            }
        }
    )
}) 
Event.on('read', () => {
    data = fs.readFile('new.txt', 'utf-8',
        (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(data)
                console.log("Thanks for using my program")
            }
        }
    )
})

Event.emit('write')
