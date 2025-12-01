import React from 'react';
import { Card } from 'react-bootstrap';
import '../../styles/productCard-style.css';

const ItemCard = ({ item }) => {
  return (
    <Card className="product-card h-100">
      <Card.Img variant="top" src={`../../images/${item.image}`} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>R$ {item.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;