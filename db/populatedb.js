
const { Client } = require('pg')
// Import dotenv to access env variables
require('dotenv').config()
const { argv } = require('node:process')
console.log('connection string:', argv[2])



// Create table and add some initial data
const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR (255),
  message TEXT,
  date_added TIMESTAMPTZ
);

INSERT INTO messages (user_name, message, date_added) 
VALUES
  ('Amando', 'Hi there!', '2026-02-01 19:10:25' ),
  ('Charles', 'Hello World!', '2026-02-02 06:30:15');
`

// Connect to the db using Connection URI
// const connectionString = `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: argv[2],
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
