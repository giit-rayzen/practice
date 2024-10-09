import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlanCard = ({ plan }) => {
    return (
        <Card style={{ width: '16rem', margin: '1rem' }}>
            <Card.Body>
                <Card.Title>₹{plan.price}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{plan.data} Data</Card.Subtitle>
                <Card.Text>
                    {plan.validity} Validity
                </Card.Text>
                <Button variant="primary">Recharge</Button>
            </Card.Body>
        </Card>
    );
};

export default PlanCard;
