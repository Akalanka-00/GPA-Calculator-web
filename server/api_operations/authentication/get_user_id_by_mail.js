var connection = require("../../service/connection");

module.exports = function get_user_id_by_mail(req, res) {
  const sql =
    "select * from userCredentials where email = '" + req.body.email + "'";
    connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
       //res.send(req.body);
      });

      res.send(sql);

};
