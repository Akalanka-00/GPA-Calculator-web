import React, { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import avatar from "../../../Assets/Images/profile.png";

import "../../../Styles/Registration_Styles.css";
import convertToBase64 from "../../../Helper/convert";
import { registerValidation } from "../../../Helper/registration_validation/validate";
import { registerUser } from "../../../Helper/helper";

const Register = () => {
  const [file, setFile] = useState();
  const navigate = useNavigate()

const saveUser = (userData)=>{
  console.log(userData);


}
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password:"",
      confirmpassword:""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });

      let registerPromise = registerUser(values);
      toast.promise(registerPromise,{
        loading:"Creating...",
        success: <b>Register successfully....</b>,
        error:<b>Could not register</b>
      });
      navigate("/")
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    //console.log(base64)
    setFile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className="glass" style={{ width: "45%" }}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reegister</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-1">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className="profile_img"
                  alt="avatar"
                />
              </label>

              <input
                type="file"
                onChange={onUpload}
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("fname")}
                  autoComplete="first-name"
                  type="text"
                  className="text_box"
                  placeholder="John"
                />
                <input
                  {...formik.getFieldProps("lname")}
                  autoComplete="family-name"
                  type="text"
                  className="text_box"
                  placeholder="Doe"
                />
              </div>
              <input
                  {...formik.getFieldProps("username")}
                  autoComplete="username"
                  type="text"
                  className="text_box"
                  placeholder="username"
                />
              <input
                {...formik.getFieldProps("email")}
                autoComplete="email"
                type="email"
                className="text_box"
                placeholder="email"
              />
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("password")}
                  autoComplete="password"
                  type="password"
                  className="text_box"
                  placeholder="password"
                />
                <input
                  {...formik.getFieldProps("confirmpassword")}
                  autoComplete="password"
                  type="password"
                  className="text_box"
                  placeholder="Confirm password"
                />
              </div>

              <button className="btn" type="submit">
                Continue
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Register?{" "}
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
