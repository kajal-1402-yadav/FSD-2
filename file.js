var fs=require('fs')
// fs.writeFileSync('hello.txt','how r u?')
// var data=fs.readFileSync('hello.txt','utf-8')
// console.log(data)
// console.log(data.toString())
// console.log('Prg ended')

// fs.mkdirSync('hello')
// fs.writeFileSync('hello/hi.txt','how r u?')
// fs.appendFileSync('hello/hi.txt','\nGood')
// var data=fs.readFileSync('hello/hi.txt','utf-8')
// fs.renameSync('hello/hi.txt','hello/user.txt')
// console.log(data)
// fs.unlinkSync('hello/user.txt')
// fs.rmdirSync('hello')

fs.writeFileSync('text.txt',"welcome to async world",
    function (err){
        if(err){
            console.log("Error...")
        }
        else{
            fs.readFile('text.txt','utf-8',
                function (err,data){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                        console.log("Reading completed!")
                    }
                }
            )
            console.log("Prg ended")
        }
    })