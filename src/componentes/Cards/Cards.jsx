import React from 'react'
import { Row } from 'react-bootstrap';
import {Card} from '../Card/Card';

export const Cards = ({items}) => {
  return (
    <Row>
    {items.map((item, index) => (
        <Card key={index} title={item.title} text={item.text} image={item.image} />
    ))}
</Row>
  )
}





