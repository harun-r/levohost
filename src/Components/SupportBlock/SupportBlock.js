import React from 'react';
import {Container, Row, Col, Button, Image} from "react-bootstrap";

import callMan from '../../assets/images/commen-support-img.webp'

const SupportBlock = () => {
    return (
        <div className="support-block">
            <Container>
                <Row>
                    <Col md={7}>
                        <h3>Not sure where to Start?</h3>
                        <p>Talk to one of our hosting specialist who will review your needs and propose a tailored hosting solution that will match your specific business reality and needs.</p>

                        <div className="support-item">
                            <Button variant="info" className="btn-support">
                                <span className="material-icons">question_answer</span>
                                <small>Sales Live Chat</small>
                            </Button>
                            <Button variant="warning" className="btn-support">
                               <span className="material-icons">confirmation_number</span>
                                <small>Support Tickets</small>
                            </Button>
                            <Button variant="success" className="btn-support">
                                <span className="material-icons">phone_paused</span>
                                <small>Call Us Now</small>
                            </Button>
                            <Button variant="danger" className="btn-support">
                                <span className="material-icons">email</span>
                                <small>Send Email</small>
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="support-man">
                            <Image src={callMan} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SupportBlock;
