import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../styles/index.css"

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-body">
        <h1>Sign Up</h1>
        <h3>Want to know more or stay up to date? Sign up for our newsletter for more information!</h3>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group classNmae="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I would like to get regular updates about new events and promotions" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
