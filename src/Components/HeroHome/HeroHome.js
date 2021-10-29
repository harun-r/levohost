import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

const HeroHome = () => {
  return (
    <div className="hero-home">
      <Container>
        <Row>
          <Col lg={{span:8,  offset: 2}}>
            <div className="d-flex flex-column align-items-center justify-content-center text-center center_hero">
              <div className="content">
                <h3>Get your website, email and business online today</h3>
                <p>
                  Get up to <strong>64% OFF</strong> Shared Web Hosting
                </p>
              </div>
              <div className="hero-offer">
                <div className="offer-list d-flex justify-content-between align-items-center flex-wrap">
                  <p><strong>Real-time</strong> Redundancy</p>
                  <p>Snapshots for <strong>instant Backups</strong></p>
                  <p><strong>Resource Monitoring</strong> Dashboard</p>
                  <p><strong>FREE Solid-State</strong> Drives included</p>
                </div>
                <div className="offer-footer d-flex flex-wrap align-items-center">
                  <div className="offer">
                    <h4>$19.99<small>/mo</small></h4>
                  </div>
                  <div className="offer-btn">
                    <Button variant="primary">GET STARTED NOW</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroHome;
