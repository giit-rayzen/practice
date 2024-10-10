import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CardLayout = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Recommended for you</h2>
      <Row>
        {/* Fiber Card */}
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
       {/*     <Card.Img variant="top" src="" alt="Fiber" />  */}
            <Card.Body>
              <Card.Title>Enjoy unlimited Wi-Fi at ₹991</Card.Title>
              <Card.Text>
                Up to 200 Mbps speed, unlimited calls & OTT apps
              </Card.Text>
              <Button variant="dark" className="me-2">Buy Now</Button>
              <Button variant="outline-dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Postpaid Card */}
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
                 {/*      <Card.Img variant="top" src="" alt="Postpaid" /> */}
            <Card.Body>
              <Card.Title>Get a superior network at ₹589</Card.Title>
              <Card.Text>
                75 GB data with no daily limit & top OTT apps
              </Card.Text>
              <Button variant="dark" className="me-2">Buy Now</Button>
              <Button variant="outline-dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Prepaid Card */}
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
         {/*   <Card.Img variant="top" src="" alt="Prepaid" /> */}
            <Card.Body>
              <Card.Title>Enjoy high-speed, seamless network</Card.Title>
              <Card.Text>
                Home delivery of SIM & Quick activation -
              </Card.Text>
              <Button variant="dark" className="me-2">Buy Now</Button>
              <Button variant="outline-dark">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardLayout;
