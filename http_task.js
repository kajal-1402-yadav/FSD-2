// home--homepage
//gallery--image
// login--Form
// otherpage--not found

var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.write('Homepage')
        res.end()
    }
    else if(req.url=='/gallery'){
        let a=fs.readFileSync('a.png')
        res.writeHead(200,{'Content-type':'image/png'})
        res.write(a)
        res.end()
    }
    else if(req.url=='/login'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<label>Username:</label>')
        res.write('<input type="text">')
        res.write('<br><label>Password:</label>')
        res.write('<input type="password">')
        res.end()
    }
    else{
        res.writeHead(404,{'Content-type':'text/plain'})
        res.write("Page Not Found")
        res.end()
    }
}).listen(3000)
