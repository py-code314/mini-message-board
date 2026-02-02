
const { Client } = require('pg')
// Import dotenv to access env variables
require('dotenv').config()

// Create table and add some initial data
const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR (255),
  message TEXT,
  date_added TIMESTAMP
);

INSERT INTO messages (user_name, message) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!');
`

// Connect to the db using Connection URI
const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
