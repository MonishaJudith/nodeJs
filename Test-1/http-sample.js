const http=require('http')

const server=http.createServer((req,res)=>
{
   if(req.url==='/')
   {
    res.write('<h1>Welcome</h1>')
    res.end()
   }

   else if (req.url==='/home'){
   res.write(

   '<h1><center> This is Home Page</h1></center>')
   res.end()
   }

   else if(req.url==='/about'){
   res.write('<h1>This is about Page</h1>'
    
   )
   res.end()
}
   else{
    res.end('<h1>Page not found</h1>'
    )
   }

})

server.listen(3800)