import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./SignUp.css";

const SignUp = () => {

  const [userData, setUserData]=useState({
    fname:"",
    lname:"",
    email:"",
    psw:"",
    cpsw:"",
  });

  function handleSubmit(e){
    e.preventDefault();
    console.log(userData);

    if(!userData.fname || !userData.lname || !userData.email || !userData.psw || !userData.cpsw){
      alert("Please fill out all fields");
    }else{
      if(userData.cpsw!=userData.psw){
        alert("Please enter password again")
        
      }else{
        
      }
    }

  }
  return (
    <div className="bg-light">
      <div className="container">
        <Row className="mt-5">
          <Col lg={4} className="bg-light m-auto rounded-top wrapper">
            <h2 className="text-center pt-3">Welcome to GPA Calculator</h2>
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

                    onChange={(e) =>
                      setUserData({ ...userData, fname: e.target.value })
                    }
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
                    autoComplete="email"
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password"required onChange={(e) =>
                      setUserData({ ...userData, psw: e.target.value })
                    }/>
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Confirm Password"
                >
                  <Form.Control type="password" placeholder="Password" required
                  onChange={(e) =>
                    setUserData({ ...userData, cpsw: e.target.value })
                  }/>
                </FloatingLabel>
              </div>

              <div className="d-grid">
                <Button
                  className="btn btn-success"
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
