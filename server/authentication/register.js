var connection = require('../service/connection');
const send_mails = require('../service/send_mails');

function generate_random_id(){
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const lettersLength = letters.length;

    //result += characters.charAt(Math.floor(Math.random() * lettersLength));
    //result += characters.charAt(Math.floor(Math.random() * lettersLength));
    let counter = 0;
    while (counter < 18) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    //console.log(result)
    return result;
}

function generate_user_id(req, res) {
    console.log("rddeq")
    var availablity = true;
    var user_id="";
    while (availablity) {
      const generated_key = generate_random_id();
     //console.log("generated_key: "+ availablity)
  
     connection.query("SELECT user_id FROM userCredentials WHERE user_id = '"+generated_key+"'", function (err, result, fields) {
      if (err) res.send(err);
      console.log("This is result: "+result)
      if(result==generated_key){
          availablity=true
      }else{availablity= false
          user_id=generated_key
          
      }
  
      console.log("result: "+ user_id)
      
     // res.send(result)   
    });
    }
  };

module.exports = async function user_register(req , res){
    const data = req.body;
    console.log(generate_random_id())
    const user_id = generate_random_id();
    var sql = "INSERT INTO userCredentials (user_id, fname, lname, email, psw, createdDateTime)" + "VALUES('"+ user_id+"','"+data.fname+"','"+data.lname+"','"+data.email+"','"+data.psw+"','"+data.createdDateTime+"')"
   // console.log(sql)
    connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
            console.log(result);
            const mail_body = "Hey! "+data.fname+"','"+data.lname+",\nWelcome to the GPA Calculator.\nYour user id is "+ user_id+"\nContinue from here: http://192.168.127.207:3000 \nThank you!";
           // send_mails(data.email,"Welcome to GPA Calculator",mail_body)
            res.send("Login Successful")
    })


}
