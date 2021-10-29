import React from 'react';
import {Col, Container, Row, Button, Image} from "react-bootstrap";

import Cpanel_img from '../../assets/images/panal_img.png'

const ControlPanel = () => {
    return (
        <div className="control-panel-sec">
            <Container>
                <Row className="align-items-center">
                    <Col md={{span:6, order: 2}} className="text-end">
                        <Image src={Cpanel_img} />
                    </Col>

                    <Col md={6}>
                        <h3>TAKE FULL CONTROL WITH THE <span>#1 CONTROL PANEL:</span> Cpanel</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa um sociis natoque penatibus et magnis</p>
                        <Button variant="warning" className="lvh-btn">View Cpanel demo</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ControlPanel;
