import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCard from '../../components/ItemCard';
import data from '../../utils/data/products';
import '../../styles/products-style.css';

const Products = () => {
  return (
    <Container className="product-container">
      <div className="title-container">
        <h1 className="text-center my-4">Itens</h1>
        <Link to="/help">
          <Button variant="success" className="recommendation-button">Recomendação</Button>
        </Link>
      </div>
      <Row>
        {data.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;