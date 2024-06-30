import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Hostel N°1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Características</Nav.Link>
                        <Nav.Link href="#">Precios</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};




// import React from 'react'

// export const NavBar = () => {
//   return (
//     <div>
//   NavBar
//     </div>
//   )
// }
