const express = require('express')
const indexRouter = express.Router()

const messages = [
  {
    id: crypto.randomUUID(),
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

indexRouter.get('/', (req, res) => {
  res.redirect('/messages')
})

indexRouter.get('/messages', (req, res) => {
  res.render('pages/index', { title: 'Home', messages })
})

indexRouter.get('/messages/:id', (req, res) => {
  const msgId = req.params.id
  const message = messages.find((message) => message.id === msgId)

  if (!message) {
    console.log('Error: message not found')
  }

  res.render('pages/msgDetails', { title: 'Message', message })
})

module.exports = { indexRouter, messages }
