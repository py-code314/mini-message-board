const express = require('express')
const newMsgRouter = express.Router()
const newMsgController = require('../controllers/newMsgController')

// New message form route
newMsgRouter.get('/', newMsgController.getNewMsgForm)

// Route to add new message to Messages
newMsgRouter.post('/', newMsgController.addNewMsg)

module.exports = newMsgRouter
