import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import TextDescComon from "../SharedComponent/TextDescComon/TextDescComon";
import our_vision from '../../assets/images/our_vision.png';
import our_mission from '../../assets/images/our_mission.png';

const OurVisionMission = () => {
    return (
        <div className="our-vision">
            <Container>
                <Row className="pb-3 mb-sm-5">
                    <Col md={{span:5, offset:1, order:2}}>
                        <div className="image">
                            <Image src={our_vision}/>
                        </div>
                    </Col>
                    <Col md={{span:5, offset:1}}>
                        <TextDescComon
                            headCenter="text-left"
                            syntext="Our"
                            name="Vision"
                            desc_1="Our vision is to enable millions of people around the world to unlock the power of the internet and give them fast, secure & reliable web hosting experience at an affordable price. We strongly believe that our success is due to our unbounded technical expertise and incomparable quality of the customer service."

                        />
                    </Col>
                </Row>
                <Row className="mt-2 mt-sm-5">
                    <Col md={{span:4, offset:1}}>
                        <div className="image">
                            <Image src={our_mission}/>
                        </div>
                    </Col>
                    <Col md={{span:6}}>
                        <TextDescComon
                            headCenter="text-left"
                            syntext="Our"
                            name="Mission"
                            desc_1="We're just on a mission and work hard every day to achieve it. We work for leading our customers to success by providing them fast, secure & reliable web hosting experience at an affordable price. We aim to regularly update our software & hardware, system and platforms to help you stay ahead of the competition."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurVisionMission;
