const express = require('express')
const indexRouter = express.Router()

// Messages data
// const messages = [
//   {
//     id: crypto.randomUUID(),
//     text: 'Hi there!',
//     user: 'Amando',
//     added: new Date(),
//   },
//   {
//     id: crypto.randomUUID(),
//     text: 'Hello World!',
//     user: 'Charles',
//     added: new Date(),
//   },
// ]

// Homepage route
indexRouter.get('/', (req, res) => {
  res.redirect('/messages')
})

// All messages route
indexRouter.get('/messages', (req, res) => {
  res.render('pages/index', { title: 'Home', messages })
})

// Individual message route
indexRouter.get('/messages/:id', (req, res) => {
  const msgId = req.params.id
  const message = messages.find((message) => message.id === msgId)

  if (!message) {
    console.log('Error: message not found')
  }

  res.render('pages/msgDetails', { title: 'Message', message })
})

module.exports = { indexRouter, messages }
