import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const ExtraFeatures = () => {
    return (
        <div className="extra-features">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="extra-features-card">
                            <span className="icon">
                                <i className="material-icons">monetization_on</i>
                            </span>
                            <h3>
                                30-Day Money Back
                            </h3>
                            <p>Your money back if you change your mind. No quibble, just simple and fair.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="extra-features-card">
                            <span className="icon">
                                <i className="material-icons">monetization_on</i>
                            </span>
                            <h3>
                                99.9% Network Uptime
                            </h3>
                            <p>Ensuring your applications are always available. Our guarantee to you.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="extra-features-card">
                            <span className="icon">
                                <i className="material-icons">monetization_on</i>
                            </span>
                            <h3>
                                Professional Support 24x7
                            </h3>
                            <p>24x7 technical support whenever you need it - by phone, live chat or ticket.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExtraFeatures;
