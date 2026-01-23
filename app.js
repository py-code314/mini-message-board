const express = require('express')
const app = express()
const path = require('node:path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const assetsPath = path.join(__dirname, 'public')
app.set(express.static(assetsPath))

app.use(express.urlencoded({ extended: true }))

const PORT = 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`App Mini Message Board - listening on port ${PORT}!`)
})
