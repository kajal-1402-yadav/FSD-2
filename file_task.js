//write ur name and rollno in student.txt file,append data having emailid in samefile and then read that data using async mechanism in es6 form
let fs = require('fs');
fs.writeFile('student.txt', "Kajal\n31",
    (err)=>{
        if (err) {
            console.log("Error...")
        }
        else {
            fs.appendFile('student.txt', '\nk@gmail.com',
                 (err)=> {
                    if (err) {
                        console.log("Error...")
                    }
                    else {
                        data = fs.readFile('student.txt', 'utf-8',
                             (err, data) =>{
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    console.log(data)
                                    console.log("Reading completed!")
                                }
                            }
                        )
                    }
                }
            )

        }
    })