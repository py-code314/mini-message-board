const express = require('express')
const newMsgRouter = express.Router()



newMsgRouter.get('/', (req, res) => {
  res.render('pages/form', { title: 'New Message' })
})

module.exports = newMsgRouter
