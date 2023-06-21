import React from 'react'
import Navbar from './NavbarComponent.js';

import "../styles/information.css";


export default function Information() {
  return (
    <div className="information-wrapper">
      <Navbar fix="top" page="info" />
      <div className="body-wrapper">
        <div className="content-wrapper">
          <h1>
            What to expect for a trip to Mars
          </h1>
          <h2>How long will the trip be?</h2>
          <p>Prepare for a long trip! Mars is a long way from Earth, and will take about four to six months just to get there.
             To minimize the energy and travel time, we utilize a specific time window to launch our spaceship. Because we rely
             on this window to ensure the fastest travel time, an opportunity to launch a spaceship back home won't happen for around
             two years after arrival on Mars. It'll be the most fun and memorable three years of your life!
           
          </p>
        </div>

      </div>
    </div>
  )
}
