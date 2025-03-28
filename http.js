var http=require('http')
var fs=require('fs')
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


// http.createServer((req,res)=>{
//     res.write(req.url)
//     res.end('abx')
// }).listen(5007)

// http.createServer((req,res)=>{
//     var a={"Name":"kajal","age":20}
//     res.writeHead(200,{'Content-type':'application/json'})
//     res.write(JSON.stringify(a))
//     res.end()
// }).listen(3007)

// http.createServer((req,res)=>{
//     let a=fs.readFileSync('a.png')
//     res.writeHead(200,{'Content-type':'image/png'})
//     res.write(a)
//     res.end()
// }).listen(6060)

// http.createServer((req,res)=>{
//     setTimeout(()=>{
//         res.writeHead(200,{'Content-type':'text/html'})
//         res.write('<h3>hello world</h3>')
//         res.end()
//     },5000)
   
// }).listen(5006)

http.createServer((req,res)=>{
    setTimeout(()=>{
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(
            `<p id='demo'></p>
            <script>
                setTimeout(()=>{
                    document.getElementById('demo').innerHTML='hello'
                },5000)
            </script>`
        )
        res.end()
    },5000)
}).listen(6008)

