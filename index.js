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
    if(req.query.name){
        res.send('<h3> Hellooo  ' + req.query.name + "</h3>")  
    } else {
      res.status(418).json( "absence of parameter") 
    }
 })
    

app.listen(PORT, () =>{
   console.log ('SERVER STARTED ON PORT ' + PORT)
})


