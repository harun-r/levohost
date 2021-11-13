import React from 'react';
import {Col, Row, Container, Button} from "react-bootstrap";

const GetStatedBox = () => {
    return (
        <div className="get-started-box">
            <Container>
                <Row className="align-items-center">
                    <Col md={7} className="text-center">
                        <div className="content">
                            <h3>Powserful Reseller Hosting to fuel your business!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis consequatur laudantium obcaecati quaerat quasi voluptates. Ex facilis iure quis vel?</p>
                        </div>
                    </Col>
                    <Col md={5}>
                       <div className="d-flex align-items-center justify-content-center content">
                           <Button variant="light">
                               get stated now
                           </Button>

                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetStatedBox;
