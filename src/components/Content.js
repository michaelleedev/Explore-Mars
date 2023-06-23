import React from 'react';
import Navbar from './NavbarComponent.js';
import Footer from './Footer.js';
import Information from './Information.js';
import Scenary from './Scenary.js';
import Activity from './Activity.js';
import Question from './Question.js';

import Image from 'react-bootstrap/Image';

import "../styles/content.css";
import InfoBackground from "../images/InformationBackground.jpg";

export default function Content(props) {

    let page;
    let content;

    switch(props.page){
        case "information":
            page = "info";
            content = <Information />;
            break;
        case "scenary":
            page = "scene";
            content = <Scenary />;
            break;
        case "activity":
            page = "activity";
            content = <Activity />;
            break;
    }

    return (
        <div>
            <Navbar fix="top" page={page} />
            <Image src={InfoBackground} alt="background image" className="background" />
            <div className="information-wrapper">
                {content} 
                <div className="content-wrapper">
                    <Question />
                </div>
                
                <Footer />
            </div>
        </div>

    )
}
