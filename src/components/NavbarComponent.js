import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.png';

export default function NavbarComponent() {
    let homeURL = "/"
    return (
        <div>
            <>
                <Navbar bg="dark" expand="md">
                    <Container fluid>
                        <Navbar.Brand href={homeURL}>
                            <img
                                src={logo}
                                width="30px"
                                height="30px"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" className="bg-secondary bg-opacity-50" />

                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-sm"
                            className="bg-dark"
                            aria-labelledby="offcanvasNavbarLabel-expand-sm"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm" className="text-light">
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#" className="text-light" >About</Nav.Link>
                                    <Nav.Link href="#" className="text-light" >Things To Do</Nav.Link>
                                    <Nav.Link href="#" className="text-light" >Travel Information</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
