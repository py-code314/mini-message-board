const express = require('express')
const newMsgRouter = express.Router()
const { messages } = require('./indexRoutes')

// New message form route
newMsgRouter.get('/', (req, res) => {
  res.render('pages/form', { title: 'New Message' })
})

// Route to add new message to Messages
newMsgRouter.post('/', (req, res) => {
  const newMsg = req.body

  messages.push({
    id: crypto.randomUUID(),
    text: newMsg.message,
    user: newMsg.username,
    added: new Date(),
  })
  res.redirect('/')
})

module.exports = newMsgRouter
