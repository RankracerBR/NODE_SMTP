require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true}) //ao invés de colocar localhost, coloque 127.0.0.1:27017
const db = mongoose.connection
db.on('error', (err)=> console.log(err))
db.once('open', ()=> console.log('Database Connected'))

app.use(express.json())

app.listen(3000, ()=> console.log('Server Running!'))