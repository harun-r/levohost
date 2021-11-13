import React from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";

const WhatSection = (props) => {
    return (
        <div className={`what-section text-center ${ props.spcStyle }`}>
            <Container>
                <Row>
                    <Col md={{span: 10, offset:1}}>
                        <h3>Interested in joining the LevoHost family? We're hiring</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque cumque eos illo illum impedit in iusto laudantium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam? tium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam?</p>
                        <Button variant={props.btnName}>Join our Team</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhatSection;
