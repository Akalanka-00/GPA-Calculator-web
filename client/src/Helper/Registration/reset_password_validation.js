import { toast } from "react-hot-toast";

//validate loginpage username
export async function resetPasswordValidate(values){
    const errors = resetPasswordVerify({},values);

    return errors
}


// Validate username
function resetPasswordVerify(errors = {}, values){
    if(values.password!==values.confirm_password){
        errors.password = toast.error( "Password Not match...!");

    }else if(values.username.includes(" ")){
        errors.password = toast.error("Invalid Password...!")
    }else if(values.password.length<8 || values.password.length>20 ){
        errors.password = toast.error("Password must be more than 8 to 20 characters")

    }

    return errors;
}