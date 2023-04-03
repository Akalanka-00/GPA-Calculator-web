const connection = require("../../../service/connection");

// /api/auth/register
module.exports = async function register_user(req, res){

   const data = req.body;
   const exist_email_sql = "Select email from user_credentials where email = '"+ data.email+"'";
   const exist_username = "Select username from user_credentials where username = '"+ data.username+"'";
  const user_register_sql = "INSERT INTO user_credentials (username , fname ,lname ,email ,password ,profile) " + "VALUES ('"+data.username+"','"+data.fname+"','"+data.lname+"','"+data.email+"','"+data.password+"','"+data.profile+"')";
  
 
   try {
    connection.query(exist_email_sql, function (exist_email_err, result_check_email, fields) {
        if (exist_email_err) {
            console.log(exist_email_err);
            res.status(500).send(exist_email_err);
        }
        else{
           // console.log(result_check_email[0])
            if(result_check_email.length >0){
                return res.status(200).send("This email is already registered. Please login in.")
            }else
            {
                connection.query(exist_username, function (exist_username_err, resul_check_username, fields) {
                    if (exist_username_err) {
                        console.log(exist_username_err);
                        return res.status(500).send(exist_username_err);
                    }else{

                        if(resul_check_username.length >0){
                            return res.status(200).send("This username is already taken. Please login in.")

                        }
                        else{
                            connection.query(user_register_sql, function (err, result, fields) {
                                if (err) {
                                    console.log(err);
                                    return res.status(500).send(err);
                                }else{
                                    return res.status(201).send("User registered successfully.")
                                }
                            });
    
                        }
                       
                    }
                });
            }
        }
    });

    
   } catch (error) {
    console.log(error)
    return res.status(500).send({error})
   }
}

