// Set up MySQL connection.
const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'root',
  // NOTE: Be sure to add your MySQL password here!
    password: 'cz821ae02bytrdqx',
    database: 'gyruwc8iocu6zxbz',
});
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
