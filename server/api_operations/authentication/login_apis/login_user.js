const connection = require("../../../service/connection");
const jwt = require("jsonwebtoken")

module.exports = function login_user(req,res){
   // const [username, password] = req.body;
   const data = req.body;
   
    const sql = "SELECT * from user_credentials where username ='"+ data.username+"'";
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send({err});
        }else{
            if(result.length>0){
                if(result[0].password === data.password){
                   const token =  jwt.sign({
                        username:data.username,
                        email:data.email
                    }, process.env.JWT_SECRET_KEY, {expiresIn: "24h"})
                    return res.status(200).send({msg:"Login successful!",
                    username:data.username,
                    token
                });
                }else{
                    return res.status(500).send("Password did not matched")

                }
            }else{
                return res.status(500).send("Entered username doesn't exist")

            }
        }
    });
}