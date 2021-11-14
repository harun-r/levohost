import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import TextDescComon from "../SharedComponent/TextDescComon/TextDescComon";
import ariful from "../../assets/images/ariful.png"

const OurTeam = () => {
    return (
        <div className="our-team">
            <Container>
                <Row>
                    <Col md={{span: 10, offset:1}} className="text-center">
                        <TextDescComon
                            headCenter="text-center"
                            syntext="Meet our"
                            name="Team"
                            desc_1="Our dedicated team members are work hard to give you a better hosting experience. We have dedicated full-time positions to project management, technical support,customer service, website development, and digital marketing to ensure we can provide you with fast, responsive service."

                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={8}>
                        <Row>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-card">
                                    <Image src={ariful} />
                                    <h3>Ariful I.</h3>
                                    <p>Head of Technical</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div className="team-commit">
                            <h3>Team Commitments</h3>
                            <ul>
                                <li>
                                    <span> Highest customer service</span>
                                </li>
                                <li>
                                    <span> Provide the service that we said</span>
                                </li>
                                <li>
                                    <span> Maximum guaranteed uptime</span>
                                </li>
                                <li>
                                    <span> Protect customers privacy</span>
                                </li>
                                <li>
                                    <span> Quality equipment</span>
                                </li>
                                <li>
                                    <span> Solid and honest business practices</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurTeam;
