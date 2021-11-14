import React from 'react';
import {Col, Container, Image, Row, Button} from "react-bootstrap";
import hostingFet from "../../../assets/images/speed.png";

const HostingFeaturesNoHead = () => {
    return (
        <div className="hosting-features-style-2">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col md={{span:5, order:2}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="hosting-feature">
                            <h3 className="font-42 text-blue">High quality website hosting</h3>
                            <p>You need powerful web hosting. A variety of premium features optimized for the best performance will make your websites really fast.</p>
                            <Button variant="link" className="p-0 text-decoration-underline text-yellow hover-letter">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between align-items-center">
                    <Col md={{span:5}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="hosting-feature">
                            <h3 className="font-42 text-blue">Feature-rich web hosting</h3>
                            <p>Everything you need to start, host and manage your website. Fast and reliable shared web hosting with tons of features to help you succeed online.</p>
                            <Button variant="link" className="p-0 text-decoration-underline text-yellow hover-letter">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between align-items-center">
                    <Col md={{span:5, order:2}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="hosting-feature">
                            <h3 className="font-42 text-blue">Optimized for WordPress performance</h3>
                            <p>The speed of your WordPress website is one of the most important SEO ranking factors. Get the best results with LiteSpeed powered caching and custom-built advanced optimization.</p>
                            <Button variant="link" className="p-0 text-decoration-underline text-yellow hover-letter">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between align-items-center">
                    <Col md={{span:5}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="hosting-feature">
                            <h3 className="font-42 text-blue">Smart pick for your website hosting</h3>
                            <p>Speed and reliability - these are the two most important things you want to evaluate when choosing website hosting. At Hostinger, we offer all of this and more, while keeping the prices affordable.</p>
                            <Button variant="link" className="p-0 text-decoration-underline text-yellow hover-letter">Learn more</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default HostingFeaturesNoHead;
