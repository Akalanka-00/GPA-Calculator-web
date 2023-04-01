var connection = require('../../service/connection');
const generate_user_id = require('./generate_id');


module.exports = async function user_register(req , res){
    const data = req.body;
    const user_id = generate_user_id();
    console.log(user_id)
    var sql = "INSERT INTO userCredentials (user_id, fname, lname, email, psw, createdDateTime)" + "VALUES('"+ user_id+"','"+data.fname+"','"+data.lname+"','"+data.email+"','"+data.psw+"','"+data.createdDateTime+"')"
   console.log(sql)
    connection.query(sql, function (err, result, fields) {
        if (err) {res.send(err);
            console.log(err);
            const mail_body = "Hey! "+data.fname+"','"+data.lname+",\nWelcome to the GPA Calculator.\nYour user id is "+ user_id+"\nContinue from here: http://192.168.127.207:3000 \nThank you!";
           // send_mails(data.email,"Welcome to GPA Calculator",mail_body)
        }else{
            res.send("Login Successful")
        }
    })

    console.log("Account created")


}
