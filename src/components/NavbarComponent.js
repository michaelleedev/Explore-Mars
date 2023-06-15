import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import '../styles/navbar.css';
import logo from '../images/logo.png';


export default function NavbarComponent() {
    let homeURL = "/"
    return (
        <div>
            <>
                <Navbar collapseOnSelect fixed="top" variant="dark" bg="dark" expand="md">
                    <Container fluid>
                        <Navbar.Brand href={homeURL}>
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
                                <Nav.Link href="#" >What To Expect</Nav.Link>
                                <Nav.Link href="#" >Things To Do</Nav.Link>
                                <Nav.Link href="#" >Travel Information</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
