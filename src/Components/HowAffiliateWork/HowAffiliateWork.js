import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TextDescComon from "../SharedComponent/TextDescComon/TextDescComon";

const HowAffiliateWork = () => {
    return (
        <div className="how-affiliate-work">
            <Container>
                <Row>
                    <Col md={{span: 10, offset:1}} className="text-center">
                        <TextDescComon
                            syntext="How Does Our"
                            name="Affiliate Program Work?"
                            desc_1="LevoHost offers great affiliate commissions, but most of our affiliates endorse us for a different reason: the Quality & Performance of our service. If you enjoy using LevoHost, share it with your friends and colleagues to earn more money."

                        />
                        <Row>
                            <Col md={4}>
                                <div className="affiliate-card">
                                    <span className="icon">
                                        <span className="material-icons">person_add</span>
                                    </span>
                                    <h3>1. Join Our Affiliate Program</h3>
                                    <p>Sign up with LevoHost. Get verified and gain access to your affiliate dashboard.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="affiliate-card">
                                   <span className="icon">
                                        <span className="material-icons">share</span>
                                    </span>
                                    <h3>2. Link & Refer</h3>
                                    <p>After signup process, You'll receive a unique tracking URL to track your referrals. Simply copy/paste on your website/blog or send the URL to your prospective referrals.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="affiliate-card">
                                    <span className="icon">
                                        <span className="material-icons">local_atm</span>
                                    </span>
                                    <h3>3. Earn Money $$$</h3>
                                    <p>When someone you refer purchases with LevoHost, You will automatically get your commission once the sale of the recommended product or package is completed.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default HowAffiliateWork;
