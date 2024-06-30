import React from 'react'
import { Card as BootstrapCard, Button, Col } from 'react-bootstrap';

export const Card = ({ title, text, image }) => {
  return (
    <Col md={4} className="my-3">
    <BootstrapCard>
        <BootstrapCard.Img variant="top" src={image} />
        <BootstrapCard.Body>
            <BootstrapCard.Title>{title}</BootstrapCard.Title>
            <BootstrapCard.Text>{text}</BootstrapCard.Text>
            <Button variant="primary">Ver Detalles</Button>
        </BootstrapCard.Body>
    </BootstrapCard>
</Col>
  )
}









