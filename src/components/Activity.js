import React from 'react';
import Image from 'react-bootstrap/Image';

import Item1 from "../images/ActivityItem1.jpg";
import Item2 from "../images/ActivityItem2.jpg";
import Item3 from "../images/ActivityItem3.jpg";

export default function Activity() {
  return (
    <div className="content-wrapper">
        <h1>Activities to do</h1>
        <p>Mars has numerous exciting activities available to you from racing around a crater, annual local festivals, expeditions, and more.</p>
    
        <h2>Rover explorations</h2>
        <Image src={Item1} alt="item 1" className="img"></Image>
        <p>
          Explore many different craters, mountains, and valleys with our multi-crewed rover. The rover includes spacious cockpit and essential features including 
          restroom, cargo, lounge, and pressure chamber. Go out on a drive with a certified driver and safety officer with your friends and family.
        </p>

        <h2>Mining</h2>
        <Image src={Item2} alt="item 2" className="img"></Image>
        <p>
          Visit one of many mining colonies located all around Mars and participate in Martian rock mining. You will be able to 
          learn about Mars' composition and it's millennia of history. Your mining activity will be guided by a well respected 
          Martian geologist for your group of friends and family. You will get to examine and analyze the rocks you mine yourself,
          and will even be able to take it back home with you.
        </p>

        <h2>Sports on Mars</h2>
        <Image src={Item3} alt="item 3" className="img"></Image>
        <p>
          Play your favorite sports inside a large recreational facility. In a Martian gravity, a normal game of soccer or basketball 
          will feel completely different from Earth. Form a team with your friend and family and participate in our regularly hosted 
          tournaments. Enjoy both casual and competitive sporting events that happen all year round on Mars.
        </p>
    </div>
  )
}
