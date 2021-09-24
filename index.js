

import express from "express"

const PORT = process.env.PORT || 4000;

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.end(
        '<h1><a href="/api/greetings">Your name</a></h1>'
    )
 })
app.get('/api/greetings', (req,res) => {
   res.send('<h3> Hellooo  ' + req.query.name + "</h3>")
//    if(!res.send){
//      res.status(400).json( "incorrect")  
//     }  
 })
app.listen(PORT, () =>{
   console.log ('SERVER STARTED ON PORT ' + PORT)
})


