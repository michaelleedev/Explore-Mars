import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Question() {
    return (
        <div>
            <h2>Have questions?</h2>
            <p>Send us a question and we'll get back to you via email</p>
            <Form id="question" className="mb-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTextrea">
                    <Form.Label>Question</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your question here" />
                </Form.Group>
                <Button href="#question" onClick={() => alert('Your question have been successfully submitted!\n\nREAD THIS\nThis website is a "mock" website and the sign up button has no functionality. Your email won\'t be saved and you will not get any emails from this website.')} variant="secondary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
