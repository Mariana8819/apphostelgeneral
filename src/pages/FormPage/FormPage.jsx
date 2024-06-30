import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';

export const FormPage = () => {
  return (
    <Container className="my-5">
    <h2>Formulario de Reserva</h2>
    <Form>
        <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>
        <Form.Group controlId="formDate">
            <Form.Label>Fecha de Reserva</Form.Label>
            <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formRoomType">
            <Form.Label>Tipo de Habitación</Form.Label>
            <Form.Control as="select">
                <option>Habitación Deluxe</option>
                <option>Suite Presidencial</option>
                <option>Habitación Estándar</option>
            </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
            Enviar
        </Button>
    </Form>
</Container>
  )
}


