import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import wwwImg from '../../assets/images/www.png'
const WhatSsl = () => {
    return (
        <div className="what-ssl">
            <Container>
                <Row>
                    <Col md={{span:4, offset:1}}>
                        <div className="multimedia d-flex align-items-center justify-content-center">
                            <Image src={wwwImg} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="content">
                            <h3>What is an SSL Certificate?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis culpa delectus deserunt distinctio doloribus facilis in ipsum minus mollitia placeat quidem rem reprehenderit, suscipit tempora ut vel voluptates.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque blanditiis culpa delectus deserunt distinctio doloribus facilis in ipsum minus mollitia placeat quidem rem reprehenderit, suscipit tempora ut vel voluptates.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhatSsl;
