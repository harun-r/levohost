import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";

function HostingPlanBox() {
    return (
        <div className="hosting-plan-box">
            <Container>
                <Row className="row-cols-md-2 gx-0 hosting-plan-center">
                    <Col md="6">
                        <div className="hosting-plan-card card-big bg-purple website-bg">
                            <h3 className="heading">Build Your Website Today</h3>
                            <h4 className="price">Starting at $49 <span>/Mo</span></h4>
                            <Button  variant="primary" className="lvh-btn">Get Started</Button>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="hosting-plan-card card-big bg-yellow domain-bg">
                            <small className="hint-text"> <span className="material-icons">gps_not_fixed</span> Find Your Domain</small>
                            <h3 className="heading heading-half">GET ONLINE WITH A DOMAIN</h3>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="hosting-plan-card card-small bg-red-dark">
                            <h3 className="heading">WEB HOSTING</h3>
                            <h4 className="price">Starting at $49 <span>/Mo</span></h4>
                            <Button  variant="outline-light" className="lvh-btn">Learn More</Button>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="hosting-plan-card card-small bg-green">
                            <h3 className="heading">VPS HOSTING</h3>
                            <h4 className="price">Starting at $79 <span>/Mo</span></h4>
                            <Button  variant="outline-light" className="lvh-btn">Learn More</Button>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="hosting-plan-card card-small bg-blue">
                            <h3 className="heading">DEDICATED SERVERS</h3>
                            <h4 className="price">Starting at $49 <span>/Mo</span></h4>
                            <Button  variant="outline-light" className="lvh-btn">Learn More</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default HostingPlanBox;
