var connection = require('../../service/connection');
const generate_token = require('./generate_token');

module.exports = function login(req , res){
    console.log(req.body);
    const sql = "select * from userCredentials where email = '"+req.body.email+"'";
    connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        userData = result[0];
        //res.send(sql);
        console.log({bodyPsw:req.body.password, userDataPsw:userData.psw})
        if(req.body.password === userData.psw){
            const token = generate_token(userData.user_id,);
            console.log(token);
            res.send(token);


        }
        else{
            res.send("error username or password")
        }  
      });

}