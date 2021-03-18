// Set up MySQL connection.
const mysql = require('mysql');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'password',
  database: 'burger_db',
});

const PORT = process.env.PORT || 3002;

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
  // console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
