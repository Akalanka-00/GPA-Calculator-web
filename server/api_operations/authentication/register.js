var connection = require("../../service/connection");
const generate_user_id = require("./generate_id");
const generate_token = require("./generate_token");

module.exports = async function user_register(req, res) {
  const data = req.body;
  const user_id = generate_user_id();
  console.log(user_id);

  var sql =
    "Select email from userCredentials where email = '" + data.email + "'";
  //console.log(sql);
  //status 0 - server error
  //status 100 - email already in use
  //status 200 - Data transfer successful
  //status 300 - Error

  
  connection.query(sql, function (err, result, fields) {
    if (err) {
      res.send({ user_id:user_id, status:300, token:"", error:err });
      console.log(err);

    } else {
      if (result.length > 0) {
        res.send({ user_id:user_id, status:100, token:"", error:"" });
    } else {
        sql =
          "INSERT INTO userCredentials (user_id, fname, lname, email, psw, createdDateTime)" +
          "VALUES('" +
          user_id +
          "','" +
          data.fname +
          "','" +
          data.lname +
          "','" +
          data.email +
          "','" +
          data.psw +
          "','" +
          data.createdDateTime +
          "')";
        console.log(sql);
        connection.query(sql, function (err, result, fields) {
            if (err) {
                res.send({ user_id:user_id, status:300, token:"", error:err });
            console.log(err);
            const mail_body =
              "Hey! " +
              data.fname +
              "','" +
              data.lname +
              ",\nWelcome to the GPA Calculator.\nYour user id is " +
              user_id +
              "\nContinue from here: http://192.168.127.207:3000 \nThank you!";
            // send_mails(data.email,"Welcome to GPA Calculator",mail_body)
          } else {
            const token = generate_token(user_id);
            res.send({ user_id:user_id, status:200, token:token, error:"" });

            console.log("token " + token);
            //res.send(token);
          }
        });
      }
    }
  });
  console.log("Account created");
};
