require('dotenv').config();
const express = require("express");
const mysql = require('mysql');
const app = express();
const PORT = 3000;


const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('db connection success');
});


// app.get('/', (req, res) => {
//   connection.query(
//     'SELECT * FROM users',
//     (error, results) => {
//       console.log(results);
//       res.send(results);
//     }
//   );
// });

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(process.env.PORT)