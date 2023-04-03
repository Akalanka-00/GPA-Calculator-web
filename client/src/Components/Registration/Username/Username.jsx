import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { useFormik } from "formik"

import { usernameValidate } from "../../../Helper/Registration/username_validation";

import avatar  from "../../../Assets/Images/profile.png"

import "../../../Styles/Registration_Styles.css"

const Username = () => {

  function checkUsername(){
    
  }
  const formik = useFormik({
    initialValues:{
      username:''
    },
    validate: usernameValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
      console.log(values)
    }
  })
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}  ></Toaster>
      <div className="flex justify-center items-center h-screen">
       <div className= "glass">
       <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold">Hello Again</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Explor more connecting with us
          </span>
        </div>
        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
            <img src={avatar} className="profile_img" alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('username')} type="text" autoComplete="current-username" className="text_box" placeholder="Username" />
            <button className="btn" type="submit">Let's Go</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">Not a member <Link className="text-red-500" to="/register">Register Now</Link></span>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};

export default Username;
