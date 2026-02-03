const express = require('express')
const indexRouter = express.Router()
const messagesController = require('../controllers/messagesController')

// Homepage route
indexRouter.get('/', messagesController.getMessages)

// All messages route
indexRouter.get('/messages', messagesController.getMessages)

// Individual message route
indexRouter.get('/messages/:id', messagesController.getMessage)

module.exports =  indexRouter 
