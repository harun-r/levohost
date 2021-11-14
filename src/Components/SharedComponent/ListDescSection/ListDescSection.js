import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const ListDescSection = () => {
    return (
        <div className="list-desc-section">
            <Container>
                <Row>
                    <Col md={{span:10,offset:1}}>
                        <h3>LevoHost <span>Terms Of Services</span></h3>
                        <h4>PLEASE READ THIS TERMS AND CONDITIONS CAREFULLY, AS IT CONTAINS IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS AND REMEDIES</h4>
                        <p>These Terms of Service are an agreement (the "Agreement") between LevoHost and you ("Client" or "your" or "you"). This Agreement states the terms and conditions of your use of the products and services (the "Services") made available by LevoHost and the LevoHost.net website. By using LevoHost Services, You agree to be bound by the terms of this agreement. </p>

                        <div className="mt-5">
                            <h5>Table Of Contents:</h5>
                            <ul>
                                <li>1.Acceptable Use Policy (AUP)</li>
                                <li>4.Money Back Guarantee </li>
                                <li>5.Domain Registration Agreement </li>
                                <li>6.Guaranteed Uptime </li>
                                <li>7.Termination</li>
                                <li>8.Promotional Codes</li>
                                <li>9.Cancellations & Refunds</li>
                                <li>10.Affiliate Terms & Conditions</li>
                                <li>11.LIMITATION OF LIABILITY</li>
                                <li>12.Referral Program Agreement</li>
                                <li>13.Age limitation</li>
                                <li>14.Modification of Terms of Service</li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListDescSection;
