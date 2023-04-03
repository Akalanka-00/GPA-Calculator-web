const connection = require("../../../service/connection");


module.exports = function verify_user(req, res) {
  const { username } = req.method == "GET" ? req.query : req.body;

  //check the user existance
  const sql =
    "SELECT * from user_credentials where username ='" + data.username + "'";
  try {
    connection.query(sql, function (err, result, fields) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        if (!result.length > 0) {
          return res.status(404).send({ error: "Can't find the user" });
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ error: "Authentication Error"});
  }
};
