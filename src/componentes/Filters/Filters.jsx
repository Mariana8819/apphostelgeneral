import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const Filters = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <Container className="my-4">
            <h4>Filtrar por:</h4>
            <Form>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="formRoomType">
                            <Form.Label>Tipo de Habitación</Form.Label>
                            <Form.Control as="select" name="roomType" onChange={handleFilterChange}>
                                <option value="">Todos</option>
                                <option value="Deluxe">Deluxe</option>
                                <option value="Presidential Suite">Suite Presidencial</option>
                                <option value="Standard">Estándar</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formPriceRange">
                            <Form.Label>Rango de Precios</Form.Label>
                            <Form.Control as="select" name="priceRange" onChange={handleFilterChange}>
                                <option value="">Todos</option>
                                <option value="low">Bajo ($0 - $100)</option>
                                <option value="medium">Medio ($100 - $200)</option>
                                <option value="high">Alto ($200+)</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4} className="d-flex align-items-end">
                        <Button variant="primary" type="submit" onClick={handleFilterChange}>
                            Filtrar
                        </Button>
                     {/* <Col md={4}>
                        <Form.Group controlId="formServiceType">
                            <Form.Label>Tipo de Servicio</Form.Label>
                            <Form.Control as="select" name="serviceType" onChange={handleFilterChange}>
                                <option value="">Todos</option>
                                <option value="Spa">Spa y Wellness</option>
                                <option value="Restaurant">Restaurantes Gourmet</option>
                                <option value="Activities">Actividades Recreativas</option>
                            </Form.Control>
                        </Form.Group>     */}
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};