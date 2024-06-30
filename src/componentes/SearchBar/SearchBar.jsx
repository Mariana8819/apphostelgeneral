import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

export const SearchBar = () => {
  return (
    <Form className="d-flex my-4">
    <FormControl
        type="search"
        placeholder="Buscar habitaciones o servicios"
        className="mr-2"
        aria-label="Search"
    />
    <Button variant="outline-success">Buscar</Button>
</Form>
  )
}




  
    

