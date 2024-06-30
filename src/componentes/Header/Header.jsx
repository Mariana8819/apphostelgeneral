import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assetsImg/logodibujadohostelfy.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import styles from './Header.module.css';

export const Header = () => {
    return (
        <Navbar  expand="lg" className={styles.customNavbar}>
            <Container>
                <Navbar.Brand href="#">
                    <img
                    src={logo} // Reemplaza con la ruta correcta de tu logo
                    alt="Hotel Nro 1"
                    width="30"
                    height="30"
                    className={styles.navbarBrandImg}
                    />{''}
                    Hotel Nro 1
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Servicios</Nav.Link>
                        <Nav.Link href="#">Habitaciones</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};



// import React, { useState } from 'react'

// export const Header = () => {
//     const [mobile, setMobile] = useState(false)

//     const displayMobile = () => {}
//     const displayDesktop = () => {}

//   return (
//     <div>
//         {
//             mobile ? displayMobile() : displayDesktop()
//         }
//     </div>
//   )
// }


