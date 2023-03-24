var connection = require('../service/connection')

connection.query("create table userCredentials(user_id varchar(20), fname varchar(20), lname varchar(20),email varchar(50),psw varchar(50),createdDateTime varchar(20))", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

// connection.query("CREATE TABLE slot (slot_id INT AUTO_INCREMENT PRIMARY KEY ,slot_price INT , availability BOOLEAN)", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.query("CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), username VARCHAR(255) ,password VARCHAR(255) , email VARCHAR(255) , nic VARCHAR(255) ,contact VARCHAR(255) , superadmin_status VARCHAR(255))", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// connection.query("CREATE TABLE admin (user_id INT PRIMARY KEY, position VARCHAR(255))", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
