import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

import baseUrl from "../../Apis/baseUrl";

import "./SignIn.scss";
import SaveLogData from "../../Apis/logData";
import logAction from "../../Model/LogActionData";

const SignIn = () => {
  //Declare warning-text-status Variable
  const [warningText, setWarningText] = useState("");
  //Declare UserModel Variable
  const [userModel, setUserModel] = useState({
    email: "",
    password: "",
  });

  //Declare IpContainer Variable
  const [ipContainer, setIpContainer] = useState({});
  //Declare MacContainer Variable
  const [macContainer, setMacContainer] = useState("");
  //Declare User ID Variable
  const [userID, setUserID] = useState("User id");

  //Set User ID
  function setCurrentUserId(){
    setUserID("User ID");
  }
  //Validation of the user input
  function loginValidation() {
    if (!userModel.email) {
      setWarningText("Your must need to enter your email.");
      return false;
    } else if (!userModel.password) {
      setWarningText("Your must need to enter your password.");
      return false;
    }
    setWarningText("");
    return true;
  }

  //Advance Validation of the user input
  function AdvanceLoginValidation() {
    const psw_length = userModel.password.length;
    //setWarningText(psw_length);
    if (psw_length > 20 || psw_length < 8) {
      setWarningText(
        "Your password must contain more than 8 to 20 characters."
      );
      return false;
    }
    return true;
  }

  //Save the input fields in userModel
  const handleChange = (e) => {
    setUserModel((user) => ({ ...user, [e.target.name]: e.target.value }));
  };

  function logingToSystem() {

    console.log(userModel)
    baseUrl.post("/api/auth/login",userModel)
    .then((res) => {
      console.log("User log");
     console.log(res.data);
    })
    .catch((err) => {
      alert(err);
    });
    HandleLog();
   
  }

  //Save log data functioin
  function HandleLog(){
    SaveLogData(
      logAction.user_log_succeesful,
      ipContainer.country_name,
      ipContainer.country_code,
      ipContainer.IPv4,
      macContainer,
      ipContainer.latitude,
      ipContainer.longitude,
      userID
    );
  }

  //Handle Login submition
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(userModel);
    

    //Change warning text visibility
  
    if (loginValidation() ) {
      if(AdvanceLoginValidation()){
        logingToSystem();
      }
    }
  }

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

  useEffect(() => {
    //calling function to load ip address from the API
    getData();
    getMac();

    setCurrentUserId();
  }, []);

  return (
    <div className="bg-light">
      <div className="container">
        <Row className="mt-5">
          <Col lg={4} className="bg-light m-auto rounded-top wrapper">
            <h2 className="text-center pt-3">Login Now</h2>
            <p className="text-center text-muted lead">
              Hey! Welcome to the GPA Calculator
            </p>

           
            <Form
              action="#"
              method="post"
              className="py-3"
              onSubmit={handleSubmit}
            >
               {/* Get user email */}
              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingEmail"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="John@gmail.com"
                    autoComplete="email"
                    name="email"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>

              {/* Get user password */}
              <div className="input-group mb-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="password"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>

              <p className="warning-text">{warningText}</p>

              {/* Login */}
              <div className="d-grid">
                <Button
                  className="btn btn-success"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>

                {/*Navigate to Sign Up Screen*/}
                <p className="text-center">
                  Register now by clicking <a href="/signup">Create Account</a>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
