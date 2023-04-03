import { toast } from "react-hot-toast";

//validate loginpage username
export async function usernameValidate(values){
    const errors = usernameVerify({},values);

    return errors
}


// Validate username
function usernameVerify(errors = {}, values){
    if(!values.username){
        errors.username = toast.error( "Username Required...!");

    }else if(values.username.includes(" ")){
        errors.username = toast.error("Invalid Username...!")
    }

    return errors;
}