import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    psw: "",
  });
  const [cpsw, setCpsw] = useState("");
  const [dbUserData, setDbUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    psw: "",
    createdDateTime: "",
  });

  const addUser = async () => {
    console.log(dbUserData);
    try {
      await axios.post("http://localhost:8000/signup", dbUserData);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);

    if (
      !userData.fname ||
      !userData.lname ||
      !userData.email ||
      !userData.psw ||
      !cpsw
    ) {
      alert("Please fill out all fields");
    } else {
      if (
        
        cpsw != userData.psw) {
        alert("Please enter password again");
      } else {
        var today = new Date(),
          dnt =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate() +
            " " +
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();

        // const dbUserData = {
        //   fname: userData.fname,
        //   lname: userData.lname,
        //   email: userData.email,
        //   psw: userData.psw,
        //   createdDateTime: dnt
        // };

        // setDbUserData({ ...dbUserData, fname: userData.fname })
        // setDbUserData({ ...dbUserData, lname: userData.lname });
        // setDbUserData({ ...dbUserData, email: userData.email });
        // setDbUserData({ ...dbUserData, psw: userData.psw });
        // setDbUserData({ ...dbUserData, createdDateTime: dnt });

        addUser();
      }
    }
  }

  // useEffect(()=>{
  //   const fetchAllUsers = async ()=>{
  //     try {
  //       const res = await axios.get('http://localhost:8000/signup')
  //       console.log(res)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchAllUsers()
  // })
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
                      setUserData({ ...userData, fname: e.target.value });
                      setDbUserData({ ...dbUserData, fname: userData.fname })
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
                      setUserData({ ...userData, lname: e.target.value })
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
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setUserData({ ...userData, psw: e.target.value })
                    }
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
                    onChange={(e) =>
                      setCpsw(e.target.value)
                    }
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
