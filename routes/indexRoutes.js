const express = require('express')
const indexRouter = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

indexRouter.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', messages })
})

module.exports = indexRouter
