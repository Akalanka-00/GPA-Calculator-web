var connection = require('../../service/connection');
const generate_id = "";


module.exports = function handle_log_data(req,res){
    const data = req.body;
    const log_id = generate_id();
    var sql = 
    "INSERT INTO system_log (log_id, date_and_time, log_action, country, country_code, ip_address, mac_address, latitude, longtitude, user_id) " + 
    "VALUES ('"+log_id+"','"+data.current_dnt +"','"+ data.action+"','"+data.country+"','"+data.country_code+"','"+data.IPv4+"','"+
    data.mac_address+"','"+data.latitude+"','"+data.longtitude+"','"+data.user_id+"')"

    //console.log(sql);

    connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else        
        res.send("Login Successful")
           // console.log(result);  
           
    })
    //console.log(sql);

}