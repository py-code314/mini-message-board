const db = require('../db/queries')

// Show new message form
async function getNewMsgForm(req, res) {
  res.render('pages/form', { title: 'New Message' })
}

// Add new message to db
async function addNewMsg(req, res) {
  const newMsg = req.body
  
  await db.insertMsg(newMsg)

  res.redirect('/')
  
}

module.exports = {
  getNewMsgForm,
  addNewMsg
}