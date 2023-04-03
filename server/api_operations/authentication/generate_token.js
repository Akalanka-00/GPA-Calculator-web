const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

module.exports = function issue_token(userId){
    dotenv.config()
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: userId,
    }
    console.log(data)
    const token = jwt.sign(data, jwtSecretKey,{
        expiresIn: "60m"
      });
      return {token}
}