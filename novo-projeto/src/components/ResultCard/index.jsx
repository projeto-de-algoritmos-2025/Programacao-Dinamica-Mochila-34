import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { knapsack } from '../../utils/scripts/knapsack';
import data from '../../utils/data/products';
import { useResultCardData } from '../../contexts/ResultCardContext';
import '../../styles/outputCard-style.css';

const ResultCard = () => {
    const { setOutputCardData } = useResultCardData();
    const [price, setPrice] = useState('');

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (price) {
            const output = knapsack(price, data);
            setOutputCardData({ loaded: true, result: output });
        }
    };

    return (
        <Card className="result-card">
            <Card.Body>
                <Card.Title className="text-center mb-4">Insira seu orçamento:</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBudget">
                        <Form.Control
                            type="number"
                            placeholder="R$ 1000"
                            value={price}
                            onChange={handlePrice}
                            className="text-center"
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={!price}
                        className="w-100 mt-3"
                    >
                        Calcular melhor compra
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ResultCard;
