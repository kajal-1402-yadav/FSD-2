// Write node js script to handle events as asked below.
// Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 
// Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square.



const EventEmitter = require('events')
const Event = new EventEmitter()
Event.on('radius', (radius) => {
    if (radius < 0) {
        console.log("Radius must be positive");
    }
    else {
        const perimeter = 2 * 3.14 * radius
        console.log(perimeter)
    }
})
Event.on('side', (side) => {
    if (side < 0) {
        console.log("Side must be positive");
    }
    else{
        const perimeter = 4 * side
        console.log(perimeter)
    }
})

Event.emit('radius', 5)
Event.emit('side', 5)
