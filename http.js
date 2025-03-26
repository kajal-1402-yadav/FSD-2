var http=require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'})
//     res.write('hello world')
//     res.write('<h1>How r u?</h1>')
//     res.end('abx')
// }).listen(5006)

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application/json'})
//     res.write(JSON.stringify({"detail":[{"fname":"abc"},{"lname":"pqr"}]}))
//     res.end()
// }).listen(5006)


http.createServer((req,res)=>{
    res.write(req.url)
    res.end('abx')
}).listen(5007)
