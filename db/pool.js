const { Pool } = require('pg')

// Connect to the db using Connection URI
const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`


// Use env variables instead of hard coding
// module.exports = new Pool({
//   host: process.env.DATABASE_HOST || 'localhost',
//   user: process.env.DATABASE_USER,
//   database: process.env.DATABASE_NAME,
//   password: process.env.DATABASE_PASSWORD,
//   port: process.env.DATABASE_PORT || 5432,
// })


// Use env variables instead of hard coding
module.exports = new Pool({
  connectionString,
})

