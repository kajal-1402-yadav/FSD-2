// Create HTTP webpage on which home page display “Home page”, student page shows “Student page” and any other page shows 
// “Page Not found”.    (Render Response & Routing)
var http=require('http')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write("<h1>Homepage</h1>")
        res.end()
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write("You are on abt page")
        res.end()
    }
    else{
        res.writeHead(404,{'Content-type':'text/plain'})
        res.write("Not Found")
        res.end()
    }
}).listen(5001)
