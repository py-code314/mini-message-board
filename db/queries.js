const pool = require('./pool')

// Get all message from db
async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages')
  return rows
}

// Get a specific message from db based on the id
async function getMessage(query) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE id = $1",
    [query],
  )
  
  return rows
}

// Insert new message into db
async function insertMsg(msg) {
  
  const user = msg.username
  const text = msg.message
  const date = new Date()

  await pool.query("INSERT INTO messages (user_name, message, date_added) VALUES ($1, $2, $3)", [user, text, date])
  
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMsg
}
