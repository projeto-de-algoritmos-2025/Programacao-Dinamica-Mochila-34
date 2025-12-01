import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ResultCard from '../../components/ResultCard';
import { useResultCardData } from '../../contexts/ResultCardContext';
import ItemCard from '../../components/ItemCard';
import '../../styles/help-style.css';

const Help = () => {
  const { outputCardData } = useResultCardData();

  if (outputCardData.loaded) {
    const getTotalAmount = () => {
      return outputCardData.result.reduce((total, item) => total + item.price, 0);
    };

    return (
      <Container className="help-container">
        <h1 className="text-center my-4">Itens Sugeridos</h1>
        <Alert variant="success" className="text-center">
          Total: R$ {getTotalAmount().toFixed(2)}
        </Alert>
        <Row>
          {outputCardData.result.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
              <ItemCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <ResultCard />
    </Container>
  );
};

export default Help;