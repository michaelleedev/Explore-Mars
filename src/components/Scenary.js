import React from 'react'

import Image from 'react-bootstrap/Image';

import Item1 from '../images/ScenaryItem1.jpg';
import Item2 from '../images/ScenaryItem2.jpg';
import Item3 from '../images/ScenaryItem3.jpg';


export default function Scenary() {
  return (
    <div className="content-wrapper">

      <h1>Places to visit</h1>
      <p>Mars has many mystical places for you to discover and explore. </p>

      <h2>Olympus Mons</h2>
      <Image src={Item1} alt="Item 1" className="img"></Image>
      <p>
        Standing at 25km tall and diameter the size of the state of Arizona, Olympus Mons takes the title of the tallest volcano/mountain in the solar system.
        Make a trip to numerous scientific settlements at the base of the volcano and discover the secret behind the formation and history.
        Ride up the volcano on designated track and rover to the top where luxuarious resort and exploration expeditions are located.
      </p>
      <p className="source">Source: <a href="https://mars.nasa.gov/gallery/atlas/olympus-mons.html" target="_blank">https://mars.nasa.gov/gallery/atlas/olympus-mons.html</a></p>
    
      <h2>Polar ice caps</h2>
      <Image src={Item2} alt="Item 2" className="img"></Image>
      <p>
        Travel to both north and south pole of Mars and discover it's magnificent ice caps. Consisting of both water and carbon dioxide, 
        polar caps of Mars give scientists a deep insight to its history and past conditions. See its special formations and travel to 
        scientific facilities via hyperloop railway system and hovercrafts. 
      </p>

      <h2>Landing sites and first colonies</h2>
      <Image src={Item3} alt="Item 3" className="img"></Image>
      <p>
        Visit the landing sites of various rovers and drones that allowed the exploration of Mars during the 21st century.
        See the rovers themselves and how they operate by visiting the rover restoration fascilities at their respective landing sites.
        Visit the first ever colonies pioneered during the 22nd century and experience their daily lives and their challenges with our 
        week long immersive colony simulation.
      </p>
    </div>
  )
}
