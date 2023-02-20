import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <Row className="mt-5">
          <Col lg={4} className="bg-light m-auto rounded-top wrapper">
            <h2 className="text-center pt-3">Login Now</h2>
            <p className="text-center text-muted lead">
              Hey! Welcome to the GPA Calculator
            </p>

            <Form action="#" className="py-3">
            <div className="input-group mb-3">
                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                  <Form.Control type="email" placeholder="John" />
                </FloatingLabel>
              </div>

              <div className="input-group mb-3">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>

              <div className="d-grid">
                <Button
                  className="btn btn-success"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
                
                <p className="text-center">
                  Register now by clicking  <a href="/signup">Create Account</a>
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
