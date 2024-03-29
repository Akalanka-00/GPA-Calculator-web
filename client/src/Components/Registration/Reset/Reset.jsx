import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { useFormik } from "formik"

import "../../../Styles/Registration_Styles.css"
import { resetPasswordValidation } from "../../../Helper/registration_validation/validate";

const Reset = () => {

  const formik = useFormik({
    initialValues:{
      Password:'',
      confirm_password:''
    },
    validate: resetPasswordValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
      console.log(values)
    }
  })
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center h-screen">
       <div className= "glass" style={{width: "50%"}}>
       <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold">Reset</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Enter new password
          </span>
        </div>
        <form className="pt-20" onSubmit={formik.handleSubmit}>
          

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} type="password" className="text_box" placeholder="password" />
            <input {...formik.getFieldProps('confirm_password')} type="password" className="text_box" placeholder="confirm password" />

            <button className="btn" type="submit">Reset Password</button>
          </div>

          
        </form>
       </div>
      </div>
    </div>
  );
};

export default Reset;
