import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import officeLogo from '../../assets/logo-designer-services.png';
import '../../styles/home-style.css';

const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Row className="align-items-center home-content">
          <Col md={6} className="text-center">
            <img className="home-image" src={officeLogo} alt="LogoShop" />
          </Col>
          <Col md={6}>
            <div className="home-instructions">
              <p className="home-description">
                Procurando sugestões sobre o que comprar com seu orçamento disponível? Não se preocupe! Nós estamos aqui para ajudar. Tudo o que você precisa fazer é nos dizer o valor que deseja gastar e nós cuidamos do resto!
              </p>
              <Link to="/products">
                <Button variant="primary" size="lg" className="home-button">
                  Ver Itens
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;