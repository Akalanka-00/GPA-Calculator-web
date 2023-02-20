import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SignIn = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <Row className="mt-5">
          <Col lg={4} className="bg-light m-auto">
            <h2 className="text-center pt-3">SignUp Now</h2>
            <p className="text-center text-muted lead">
              It's free and take a minute
            </p>

            <Form action="#">
           <div className="input-group">
           <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
           </div>

<div className="input-group">
<FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
</div>
              
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
