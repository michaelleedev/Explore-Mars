import React from 'react';
import Navbar from './NavbarComponent.js';
import Footer from './Footer.js';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../styles/information.css";
import InfoBackground from "../images/InformationBackground.jpg";
import InfoImage1 from "../images/InformationItem1.jpg"
import InfoImage2 from "../images/InformationItem2.jpg"
import InfoImage3 from "../images/InformationItem3.jpg"

export default function Information() {
  return (
    <div className="information">
      <Navbar fix="top" page="info" />
      <Image src={InfoBackground} alt="background image" className="background"/>
      <div className="information-wrapper">
        <div className="content-wrapper">
          <h1>
            What to expect for a trip to Mars
          </h1>

          <h2>How long will the trip be?</h2>
          <Image src={InfoImage1} alt="image 1" className="img" />
          <p>Prepare for a long trip! Mars is a long way from Earth, and will take about four to six months just to get there.
            To minimize the energy and travel time, we utilize a specific time window to launch our spaceship. Because we rely
            on this window to ensure the fastest travel time, an opportunity to launch a spaceship back home won't happen for around
            two years after arrival on Mars. It'll be the most fun and memorable three years of your life!
          </p>

          <h2>How will we get there?</h2>
          <Image src={InfoImage2} alt="image 2" className="img" />
          <p>Because transit itself is a big part of the trip, we make sure to keep the travel comfortable and enjoyable.
            You will be traveling in the reliable and mission tested Spaceship developed by SpaceY. Spaceship has a great track record of
            numerous missions to Moon and Mars with passenger count of more than 200 souls onboard. In the vessel, you will get your own
            sleeping pod, community shared excersize facility, and specific tasks fit to your skills to ensure an accident-free and comfortable
            travel for everyone.
          </p>

          <h2>How do we prepare for the trip?</h2>
          <Image src={InfoImage3} alt="image 3" className="img" />
          <p>Traveling through space is still dangerous even with our recent advancement in space travel. In order to prepare for traveling
            in space, all passengers are required to take classes and training that last for about three months and pass the exam at the end.
            These classes are not meant to be too challenging and designed to prepare the passenger's body and mind for the long trip ahead.
            Don't worry if you don't pass the exam the first time! You can retake the exam as many times as you want.
          </p>

          <h2>Have more questions?</h2>
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
        <Footer />
      </div>
    </div>

  )
}
