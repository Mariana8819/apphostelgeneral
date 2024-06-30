import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.module.css';

const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Hostel N°1</h5>
                        <p>Dirección del hotel, Ciudad, País</p>
                        <p>Teléfono: +123 456 7890</p>
                        <p>Email: info@mihotel.com</p>
                    </Col>
                    <Col md={6} className="text-md-right">
                        <h5>Síguenos</h5>
                        <a href="https://facebook.com" className="mr-3">Facebook</a>
                        <a href="https://twitter.com" className="mr-3">Twitter</a>
                        <a href="https://instagram.com">Instagram</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
