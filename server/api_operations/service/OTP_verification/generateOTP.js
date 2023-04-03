
const OTP_Generator = require("otp-generator")

module.exports = async function generateOTP(){

    let OTP = await OTP_Generator.generate(6, {lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false});
    
}