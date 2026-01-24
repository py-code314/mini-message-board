const express = require('express')
const newMsgRouter = express.Router()
const {messages} = require('./indexRoutes')



newMsgRouter.get('/', (req, res) => {
  res.render('pages/form', { title: 'New Message' })
})

newMsgRouter.post('/', async (req, res) => {
  const newMsg = req.body

  messages.push({
    id: crypto.randomUUID(),
    text: newMsg.message,
    user: newMsg.username,
    added: new Date()
  })
  res.redirect('/')
})

module.exports =  newMsgRouter 
