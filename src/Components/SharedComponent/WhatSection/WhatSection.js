import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

const WhatSection = (props) => {
    return (
        <div className={`what-section text-center ${ props.spcStyle }`}>
            <Container>
                <Row>
                    <Col md={{span: 10, offset:1}}>
                        <h3>{props.heading}</h3>
                        <p>{props.desc}</p>
                        <Button variant={props.btnName}>{props.btnText}</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhatSection;
