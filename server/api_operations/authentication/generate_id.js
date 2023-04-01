var connection = require("../../service/connection");


module.exports =  function generate_user_id(req, res) {
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
  
};
