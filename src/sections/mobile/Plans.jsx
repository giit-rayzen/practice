/*
import React from 'react'

const Plans = () => {
  return (
    <div>
        <h4> all recharge plans will list here so just STAY Connected with us</h4>
    </div>
  )
}

export default Plans

*/

import React from 'react';
import PlanCard from './PlanCard';
import { Container, Row, Col } from 'react-bootstrap';

const Plans= () => {
    const plans = [
        { id: 1, price: 199, data: '1.5GB/day', validity: '28 Days' },
        { id: 2, price: 399, data: '2GB/day', validity: '56 Days' },
        { id: 3, price: 599, data: '3GB/day', validity: '84 Days' },
        { id: 4, price: 999, data: '3GB/day', validity: '121 Days' },
        { id: 5, price: 2599, data: '3GB/day', validity: '365 Days' },
    ];

    return (
        <Container>
            <h1 className="text-center my-4">Mobile Recharge Plans</h1>
            <Row>
                {plans.map(plan => (
                    <Col key={plan.id} sm={12} md={4}>
                        <PlanCard plan={plan} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Plans;
