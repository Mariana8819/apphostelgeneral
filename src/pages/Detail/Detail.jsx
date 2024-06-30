import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export const Detail = ({ title, description, image }) => {
  return (
    <Container className="my-5">
    <Row>
        <Col md={6}>
            <img src={image} alt={title} className="img-fluid" />
        </Col>
        <Col md={6}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Button variant="primary">Reservar Ahora</Button>
        </Col>
    </Row>
</Container>
  )
}

   