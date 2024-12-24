const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req);
    if(req.url === '/'){
        res.end('welcome');
    }
     if(req.url === '/about'){
        res.end('welcome about');
     }
    // res.write('welocome to our home page')
    // res.end()
    res.end(`
        <h1>OOPS!</h1>
        <p>page found</p>
        <a href='/'>back </a>

       `)
})
server.listen(5000)

