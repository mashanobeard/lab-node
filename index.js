import express  from "express"

const PORT = 4000;

const app = express()

app.get('/', (req,res) => {
    res.end(
        '<h1><a href="/api/greetings">Your name</a></h1>'
    )
 })
app.get('/api', (req,res) => {
   res.end(
       '<h1>Home page</h1>'
   )
})
app.get('/api/greetings', (req,res) => {
    res.send('<h1>Hellooo</h1> + ${name}')
 })
app.listen(PORT, () =>{
   console.log ('SERVER STARTED ON PORT' + PORT)
})
