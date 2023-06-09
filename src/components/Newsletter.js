import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-body">
        <h1>Sign Up</h1>
        <h3>Want to know more or stay up to date? Sign up for our newsletter for more information!</h3>
      </div>
      <Form id="newsletter">
        <Form.Group className="mb-3" controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I would like to get regular updates about new events and promotions" />
        </Form.Group>
        <Button href="#newsletter" onClick={() => alert('Success! \nYou have successfully signed up for our newsletter. \n\n READ THIS \nThis website is a "mock" website and the sign up button has no functionality. Your email won\'t be saved and you will not get any emails from this website.')}  variant="secondary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
