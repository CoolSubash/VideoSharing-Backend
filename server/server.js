const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const express = require('express')
const nodemon = require('nodemon')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
const uri = process.env.MONGO

// router

const authroutes = require('./routes/auth.js')
const userroutes = require('./routes/user.js')
const videoroutes = require('./routes/video.js')
const commentroutes = require('./routes/comment.js')

const connect = () => {
  // Connect to the MongoDB database
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
      // Start your server or perform other operations
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error)
    })
}
// middleware
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/auth', authroutes)
app.use('/api/v1/user', userroutes)
app.use('/api/v1/video', videoroutes)
app.use('/api/v1/comment', commentroutes)

//error handler
app.use((err, req, res, next) => {
  console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'
  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

app.listen(8800, () => {
  connect()

  console.log('Connected to Server')
})
