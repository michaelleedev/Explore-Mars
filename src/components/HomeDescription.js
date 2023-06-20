import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import '../styles/index.css'

export default function HomeDescription() {


    return (
        <div>
            <Container fluid className="description-container">
                <div id="description-information">
                    <div className="information-content">
                        <h1>THINGS TO KNOW <br></br> BEFORE YOUR TRIP</h1>
                        <p>Prepare for a long trip!<br></br>
                            Traveling to Mars is very different than traveling on Earth, but don't worry, we got you covered.</p>
                        <Button href="/information" variant="secondary" className="mt-3">Learn More</Button>
                    </div>
                </div>
                 <div id="description-scenery">
                    <div className="scenery-content">
                        <h1>VISIT THE ALIEN<br></br> SITES OF MARS</h1>
                        <p>See the mystical sites and sceneries of Mars!<br></br>
                            Mountains, craters, settlements, and historic landing sites are waiting to be explored.</p>
                        <Button href="/scenary" variant="secondary" className="mt-3">Learn More</Button>
                    </div>
                </div>
                <div id="description-activity">
                    <div className="activity-content">
                        <h1>SPEND TIME <br></br>AS A SETTLER</h1>
                        <p>Take part in essential and scientific activities!<br></br>
                        From resource mining to agricultural engineering, learn what it's like to be part of a settlement and keep it operating.</p>
                        <Button href="/activity" variant="secondary" className="mt-3">Learn More</Button>
                    </div>
                </div> 
            </Container>
        </div>
    )
}