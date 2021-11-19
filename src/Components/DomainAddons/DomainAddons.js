import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionHeadV2 from "../SectionHeadV2/SectionHeadV2";

const DomainAddons = () => {
    return (
        <div className="domain-addons">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}} className="text-center mb-5">
                        <SectionHeadV2
                            heading="FREE Add-ons with all"
                            headingRed="Domain Names"
                            desc="You'll get two Free email account, Domain Theft Protection, Domain Forwarding, DNS Management and many more Premium Features with all of the domain names above."
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">question_answer</span>
                            </div>
                            <p>Free Email Account</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">language</span>
                            </div>
                            <p>Domain Forwarding</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">verified_user</span>
                            </div>
                            <p>Domain Theft Protection</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">dns</span>
                            </div>
                            <p>DNS Management</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">settings</span>
                            </div>
                            <p>Easy to use Control Panel</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="domain-addons-item">
                            <div className="icon">
                                <span className="material-icons">date_range</span>
                            </div>
                            <p>Multi-Year Registration</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DomainAddons;
