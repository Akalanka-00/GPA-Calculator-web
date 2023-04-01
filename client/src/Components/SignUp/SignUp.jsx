import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Route, Routes, useNavigate } from 'react-router-dom';

import baseUrl from "../../Apis/baseUrl";
import "./SignUp.css";
import logAction from "../../Model/LogActionData";
import axios from "axios";
import SaveLogData from "../../Apis/logData";

function SignUp () {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [cpsw, setCpsw] = useState("");
   //Declare IpContainer Variable
   const [ipContainer, setIpContainer] = useState({});
   //Declare MacContainer Variable
   const [macContainer, setMacContainer] = useState("");
    //Declare User ID Variable
  const [userID, setUserID] = useState("");

  //Set User ID
  function setCurrentUserId(){
    console.log(email);
    baseUrl.post("/api/auth/get/userid", email)
    .then((res) => {     
      setUserID(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      alert(err);
    });
  }

  const navigate = useNavigate();


  const addUser = async () => {
    console.log(setDnT());
    const dbUserData = {
      fname: fname,
      lname: lname,
      email: email,
      psw: psw,
      createdDateTime: setDnT(),
    };
    baseUrl
      .post("/api/auth/register", dbUserData)
      .then((res) => {
        //alert(res.data);
        console.log(res.data)
        SaveLogData(
          logAction.user_register_successful,
          ipContainer.country_name,
          ipContainer.country_code,
          ipContainer.IPv4,
          macContainer,
          ipContainer.latitude,
          ipContainer.longitude,
          userID
        );
       // navigate('/dashboard', { replace: true });        
      })
      .catch((err) => {
        alert(err);
      });
  };

   //creating function to load ip address from the API
   const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    //console.log(res.data);
    setIpContainer(res.data);
  };

  //Creating function to load mac address from API
  const getMac = async () => {
    baseUrl
      .get("/api/service/macaddress")
      .then((res) => {
        setMacContainer(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  function setDnT() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' '); // format as ISO string

    return formattedDate;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!fname || !lname || !email || !psw || !cpsw) {
      alert("Please fill out all fields");
    } else {
      if (cpsw != psw) {
        alert("Please enter password again");
      } else {
        setCurrentUserId();
        addUser();
      }
    }
  }

  useEffect(()=>{
     //calling function to load ip address from the API
     getData();
     getMac();
  },[])
  return (
    <div className="bg-light">
      <div className="container">
        <Row className="mt-5">
          <Col lg={4} className="bg-light m-auto rounded-top wrapper">
            <h2 className="text-center pt-3">Welcome to Calculator</h2>
            <p className="text-center text-muted lead">Join Now</p>

            <Form action="#" autoComplete="on" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="First Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="John"
                    name="fname"
                    required
                    autoComplete="first-name"
                    id="fname"
                    onChange={(e) => {
                      // setUserData({ ...userData, fname: e.target.value });
                      // setDbUserData({ ...dbUserData, fname: userData.fname })
                      setFname(e.target.value);
                    }}
                  />
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Last Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="John"
                    name="lname"
                    id="lname"
                    required
                    autoComplete="family-name"
                    onChange={(e) =>
                      //setUserData({ ...userData, lname: e.target.value })
                      setLname(e.target.value)
                    }
                  />
                </FloatingLabel>
              </div>

              {/* <div className="input-group mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Select the university</option>
                  <option value="1">University of Moratuwa</option>
                </Form.Select>
              </div>

              <div className="input-group mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Select the Faculty</option>
                  <option value="1">Faculty of IT</option>
                </Form.Select>
              </div> */}

              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Doe"
                    name="email"
                    required
                    id="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    id="psw1"
                    onChange={(e) => setPsw(e.target.value)}
                  />
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Confirm Password"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    id="psw2"
                    onChange={(e) => setCpsw(e.target.value)}
                  />
                </FloatingLabel>
              </div>

              <div className="d-grid">
                <Button
                  className="btn btn-primary"
                  variant="primary"
                  type="submit"
                >
                  Create Account
                </Button>
                <p className="text-center text-muted mt-2">
                  When you register by clicking Create Account button, You agree
                  to our <a href="#">Terms and Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
                <p className="text-center">
                  Already Havae an Account? <a href="/signin">Login here</a>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
