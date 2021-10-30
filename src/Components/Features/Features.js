import React from 'react';
import {Container, Row, Col, Image, Button} from "react-bootstrap";

import feature_1 from '../../assets/images/feature_img01.svg';
import feature_2 from '../../assets/images/feature_img02.svg';
import feature_3 from '../../assets/images/feature_img03.svg';
import SectionHeading from "../SectionHeading/SectionHeading";

const Features = () => {
    return (
        <div className="feature-section">
            <Container>
                <SectionHeading
                    clasess="text-center"
                    heading="What makes Levohost so Different?"
                    desc="Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur, adipisci numquam eius tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem."/>
            </Container>
            <Container>
                <Row>
                    <Col md={{span: 10, offset:1}}>
                        <Row className="align-items-center feature-item">
                            <Col md={3}>
                                <div className="feature-img">
                                    <Image src={feature_1}/>
                                </div>
                            </Col>
                            <Col md={{span:7, offset:1}}>
                                <div className="feature-card">
                                    <h3>Maximum Performance</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sites voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <Button rounded-pill  variant="outline-primary" className="lvh-btn rounded-pill">View more info!</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center feature-item">

                            <Col md={{span: 3, offset: 1, order:2}}>
                                <div className="feature-img">
                                    <Image src={feature_2}/>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="feature-card">
                                    <h3>WordPress Pre-Installed</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sites voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <Button variant="outline-primary" className="lvh-btn rounded-pill">View more info!</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center feature-item">
                            <Col md={3}>
                                <div className="feature-img">
                                    <Image src={feature_3}/>
                                </div>
                            </Col>
                            <Col md={{span:7, offset:1}}>
                                <div className="feature-card">
                                    <h3>Fre Let’s Encrypt SSL</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sites voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <Button variant="outline-primary" className="lvh-btn rounded-pill">View more info!</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center feature-item">
                            <Col md={{span: 3, offset: 1, order: 2}}>
                                <div className="feature-img">
                                    <Image src={feature_2}/>
                                </div>
                            </Col>
                            <Col md={7}>
                                <div className="feature-card">
                                    <h3>WordPress Pre-Installed</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sites voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <Button variant="outline-primary" className="lvh-btn rounded-pill">View more info!</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Features;
