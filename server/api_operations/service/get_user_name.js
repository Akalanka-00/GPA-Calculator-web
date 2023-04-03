var connection = require("../../service/connection");

module.exports = function get_user_name(req, res) {
    console.log(req);
  var sql =
    "Select * from userCredentials where user_id = '" + req.body + "'";
  connection.query(sql, function (err, result, fields) {
    if (err) res.send(err);
    res.send(result);
    // console.log(result);
  });
};
