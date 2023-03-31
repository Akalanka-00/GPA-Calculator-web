var connection = require('../service/connection')

connection.query("create table userCredentials(user_id varchar(20), fname varchar(20), lname varchar(20),email varchar(50),psw varchar(50),createdDateTime varchar(20))", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

connection.query("CREATE TABLE gpacalculator.system_log (log_id INT NOT NULL,Data and time DATETIME NOT NULL,Action VARCHAR(100) NOT NULL,"+
"Country VARCHAR(15) NOT NULL,Country Code VARCHAR(5) NOT NULL,IPv4 VARCHAR(45) NOT NULL,mac_address VARCHAR(20) NOT NULL,latitude VARCHAR(10) NOT NULL,"+
  "longitude VARCHAR(45) NOT NULL,user_id VARCHAR(45) NOT NULL,UNIQUE INDEX log_id_UNIQUE (log_id ASC) VISIBLE,UNIQUE INDEX mac_address_UNIQUE (mac_address ASC) VISIBLE,"+
  "INDEX user_id_idx (user_id ASC) VISIBLE,CONSTRAINT user_idFOREIGN KEY (user_id)REFERENCES gpacalculator.usercredentials (user_id)"+
    "ON DELETE CASCADE ON UPDATE CASCADE);", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

// connection.query("CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), username VARCHAR(255) ,password VARCHAR(255) , email VARCHAR(255) , nic VARCHAR(255) ,contact VARCHAR(255) , superadmin_status VARCHAR(255))", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// connection.query("CREATE TABLE admin (user_id INT PRIMARY KEY, position VARCHAR(255))", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
