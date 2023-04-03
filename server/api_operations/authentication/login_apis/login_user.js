const connection = require("../../../service/connection");

module.exports = function login_user(req,res){
   // const [username, password] = req.body;
   const data = req.body;
   
    const sql = "SELECT * from user_credentials where username ='"+ data.username+"'";
    connection.query(sql, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }else{
            if(result.length>0){
                if(result[0].password === data.password){
                    return res.status(200).send("Login successful!")
                }else{
                    return res.status(500).send("Login failed!")

                }
            }else{
                return res.status(500).send("Login failed!")

            }
        }
    });
}