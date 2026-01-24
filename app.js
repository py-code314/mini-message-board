const express = require('express')
const app = express()
const path = require('node:path')
const { indexRouter } = require('./routes/indexRoutes')
const newMsgRouter = require('./routes/newMsgRoutes')

// EJS setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Setup for static files
const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

// Middleware to process request body
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', indexRouter)
app.use('/new-msg', newMsgRouter)

const PORT = 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`App Mini Message Board - listening on port ${PORT}!`)
})
