const connection = require("../../../service/connection");


module.exports = function get_user(req, res) {
  
    const { username } = req.params;
    try {
        if(!username) return res.status(501).send({error:"Invalid Username"});
        const sql = "SELECT * from user_credentials where username ='"+ username+"'";
        connection.query(sql, function (err, result, fields) {
            if (err) {
                console.log(err);
                res.status(500).send({err});
            }else{
                if(!result.length>0){
                    return res.status(501).send({error:"Could't find a user"})
                }else{

                    const {password, ...rest} = result[0];
                    return res.status(201).send(rest);
                }
            }
        });

    } catch (error) {
        return res.status(500).send({error:error});
    }
  };
  