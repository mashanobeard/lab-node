import express from 'express'
import router from './modules/notes/routes/index.js'
import router1 from './modules/greeting/routes/index.js'
import morgan from 'morgan'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 4000
const DB_URL = `mongodb+srv://username:user@cluster0.dncy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()
app.use(express.json())

app.use('/api/notes', router)
app.use('/api/greetings', router1)

app.use(morgan('combined')) //logger

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT ' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}
startApp()
