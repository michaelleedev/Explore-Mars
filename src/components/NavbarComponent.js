import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import logo from '../images/logo.png';


export default function NavbarComponent(props) {
    const fix = props.fix;
    let info = "What To Expect";
    let scene = "Places To Visit";
    let activity = "Things To Do";


    switch(props.page){
        case "info":
            info = "Top";
            break;
        case "scene":
            scene = "Top";
            break;
        case "activity":
            activity ="Top";
    }

    return (
        <div>
            <>
                <Navbar collapseOnSelect fixed={fix} variant="dark" bg="dark" expand="md">
                    <Container fluid>
                        <Navbar.Brand href="/ExploreMars">
                            <img
                                src={logo}
                                width="30px"
                                height="30px"
                                className="d-inline-block align-top"
                                alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-md-center flex-grow-1 pe-auto">
                                <Nav.Link href="/ExploreMars/information" >{info}</Nav.Link>
                                <Nav.Link href="/ExploreMars/scenary" >{scene}</Nav.Link>
                                <Nav.Link href="/ExploreMars/activity" >{activity}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
