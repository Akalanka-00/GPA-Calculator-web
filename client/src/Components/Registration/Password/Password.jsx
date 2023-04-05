import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast"
import { useFormik } from "formik"


import avatar  from "../../../Assets/Images/profile.png"

import "../../../Styles/Registration_Styles.css"
import { passwordValidate } from "../../../Helper/registration_validation/validate";
import { useAuthStore } from "../../../store/store";
import useFetch from "../../../hooks/fetch.hook";
import { verifyPassword } from "../../../Helper/helper";

export default function Password(){

  const {username} = useAuthStore(state=>state.auth);
  //const apiData="";
  const [{ isLoading, apiData, serverError }] = useFetch(`${username}`)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:{
      Password:''
    },
    validate: passwordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values =>{
      console.log(values)
      let loginPromise = verifyPassword({username, password:values.Password});
      toast.promise(loginPromise, {
        success: <b>Login successful...!</b>,
        error:<b>Password Not matched</b>
      });
      loginPromise.then((res)=>{
        let {token} = res.data;
        localStorage.setItem('token', token);
        navigate("/dashboard")
      })
    }
  });

  if(isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>
  if(serverError) return <h1 className="text-xl text-red-500">{serverError.message}</h1>
  
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} ></Toaster>
      <div className="flex justify-center items-center h-screen">
       <div className= "glass">
       <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold">Hello {apiData?.fname || apiData?.username}</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Explor more connecting with us
          </span>
        </div>
        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
            <img src={apiData?.profile || avatar} className="profile_img" alt="avatar" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} type="password" className="text_box" placeholder="password" />
            <button className="btn" type="submit">Sign In</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">Forgot Password? <Link className="text-red-500" to="/recover">Recover Now</Link></span>
          </div>
        </form>
       </div>
      </div>
    </div>
  );
};


