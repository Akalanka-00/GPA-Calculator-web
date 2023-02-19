import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import './SignIn.css'
const SignIn = () => {
  return (
    <div className="signin-container">
      
        <Form className='signin-form'>
        <h2 className='title'>Welcome to GPA Calculator</h2>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <a href='#' className='forget-psw'>Forget password</a>
      <hr className='line'/>
        </Form>

        
    </div>
  )
}

export default SignIn
