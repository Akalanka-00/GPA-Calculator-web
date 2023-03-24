var mysql = require('mysql');



const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass@123",
    database: "gpacalculator",
  });

  conn.connect(function(err) {
    if (err) throw err;
    console.log("connected")
  });

module.exports = conn