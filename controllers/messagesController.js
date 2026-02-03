const db = require('../db/queries')

// Get all messages
async function getMessages(req, res) {
  const messages = await db.getAllMessages()
  console.log('Messages: ', messages)
  res.render('pages/index', { title: 'Home', messages })
}

// Get a specific message by id
async function getMessage(req, res) {
  const msgId = req.params.id
  const message = await db.getMessage(Number(msgId))

  if (!message) {
    console.log('Error: message not found')
  }

  res.render('pages/msgDetails', { title: 'Message', message: message[0] })
}

module.exports = {
  getMessages,
  getMessage
}
