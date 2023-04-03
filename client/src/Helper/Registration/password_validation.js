import { toast } from "react-hot-toast";

//validate loginpage username
export async function passwordValidate(values){
    const errors = passwordVerify({},values);

    return errors
}


// Validate username
function passwordVerify(errors = {}, values){
    if(!values.password){
        errors.password = toast.error( "Password Required...!");

    }else if(values.username.includes(" ")){
        errors.password = toast.error("Invalid Password...!")
    }else if(values.password.length<8 || values.password.length>20 ){
        errors.password = toast.error("Password must be more than 8 to 20 characters")

    }

    return errors;
}