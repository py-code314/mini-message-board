const express = require('express')
const indexRouter = express.Router()

const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

indexRouter.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home', messages })
})

indexRouter.get('/:id', (req, res) => {
  const msgId = req.params.id
  console.log('id:', msgId)
  const message = messages.find((message) => message.id === Number(msgId))
  console.log('message:', message)
  if (!message) {
    console.log('Error: message not found')
  }
  res.render('pages/msgDetails', { title: 'Message', message })
})

module.exports = { indexRouter, messages }
