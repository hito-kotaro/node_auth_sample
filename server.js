require('dotenv').config();
const express = require("express");
const mysql = require('mysql');
const app = express();
const PORT = 3000;


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});


connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('db connection success');
});


app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.send(results);
    }
  );
});

app.listen(PORT)