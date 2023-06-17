import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import '../styles/index.css'

export default function HomeDescription() {


    return (
        <div>
            <Container fluid className="description-container">
                <h1 className="section-title">EXPLORE MARS</h1>
                <Row>
                    <Col className="col-md-4 col-12">
                        <div className="description-item">
                            <h1>Basic Information</h1>
                            <h3>Traveling to Mars is a bit different than traveling on Earth, and we got you covered</h3>
                        </div>

                        <Button href="#" variant="outline-secondary" size="lg" className="mt-5">Lean More</Button>
                    </Col>
                    <Col className="col-md-4 col-12">
                        <div className="description-item">
                            <h1>Scenaries and Activities</h1>
                            <h3>Experience what it's like to live on Mars with various activities to do and scenaries to explore</h3>
                        </div>

                        <Button href="#" variant="outline-secondary" size="lg" className="mt-5">Lean More</Button>
                    </Col>
                    <Col className="col-md-4 col-12">
                        <div className="description-item">
                            <h1>Customized Travel Plans</h1>
                            <h3>Start with our basic itinerary and customize it however you want</h3>
                        </div>
                        <Button href="#" variant="outline-secondary" size="lg" className="mt-5">Lean More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
