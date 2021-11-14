import React from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";

const SslReasons = () => {
    return (
        <div className="ssl-reasons">
            <Container>
                <Row>
                    <Col className="text-center mb-4">
                        <h3>6 Reasons why SSL/TLS is a must have for any website</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:10, offset:1}} className="mt-4">
                        <Row>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">1</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">2</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">3</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">4</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">5</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="content">
                                    <span className="number">6</span>
                                    <p><strong>Brand Credibility. </strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                                </div>
                            </Col>

                            <Col md={12} className="text-center mt-4">
                                <Button variant="danger" className="btn-border-1">Secure your website</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SslReasons;
