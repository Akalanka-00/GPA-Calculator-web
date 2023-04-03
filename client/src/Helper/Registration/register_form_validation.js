import { toast } from "react-hot-toast";

//validate loginpage username
export async function registerFormValidate(values){
    const errors = fnameVerify({},values);
    lnameVerify(errors,values);
    usernameVerify(errors,values);
    emailVerify(errors, values);
    passwordVerify(errors, values);
    confirmPasswordVerify(errors, values);
    return errors;
}

function fnameVerify(errors = {}, values){
    if(!values.fname){
        errors.fname = toast.error( "FirstName Required...!");

    }else if(values.fname.includes(" ")){
        errors.fname = toast.error("Invalid FirstName...!")
    }

    return errors;
}

function lnameVerify(errors = {}, values){
    if(!values.lname){
        errors.lname = toast.error( "LastName Required...!");

    }else if(values.fname.includes(" ")){
        errors.lname = toast.error("Invalid LastName...!")
    }

    return errors;
}


// Validate password
function passwordVerify(errors = {}, values){
    if(!values.password){
        errors.password = toast.error( "Password Required...!");

    }else if(values.password.includes(" ")){
        errors.password = toast.error("Invalid Password...!")
    }else if(values.password.length<8 || values.password.length>20 ){
        errors.password = toast.error("Password must be more than 8 to 20 characters")

    }

    return errors;
}

// Validate Confirm password
function confirmPasswordVerify(errors = {}, values){
    if(!values.confirmpassword){
        errors.confirmpassword = toast.error( "Confirm Password Required...!");

    }else if(values.confirmpassword.includes(" ")){
        errors.confirmpassword = toast.error("Invalid Confirm Password...!")
    }else if(values.confirmpassword.length<8 || values.confirmpassword.length>20 ){
        errors.confirmPasswod = toast.error("Confirm Password must be more than 8 to 20 characters")

    }else if(values.password !== values.confirmpassword){
        errors.confirmPasswod = toast.error(values.password)
    }

    return errors;
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
// Validate username
/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}