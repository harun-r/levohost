import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const AffiliateTc = () => {
    return (
        <div className="list-section bg-white">
            <Container>
                <Row>
                    <Col md={{span:10,offset:1}}>
                        <h3>Affiliate Program <span>Terms & Conditions</span></h3>

                        <Row>
                            <Col md={10}>
                                <div className="list-card">
                                    <ul>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>You can't use an affiliate link for own usages.</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>You should not engage in any blackhat SEO/spam link building techniques to generate more referrals for LevoHost</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>If multiple Affiliates refer to the same unique customer, only the last referrer before the customer orders LevoHost services will receive credit for the referral.</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>Affiliates are responsible for all fees, charges, taxes, surcharges, exchange rates and other costs incurred to receive their Rewards.</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>Coupon sharing site is not allowed for our affiliate program.</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>You are required to disclose the affiliate relationship with LevoHost on your website.</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">gavel</span>
                                            <span>Referred customers that issue a chargeback or dispute and/or are found to be fraudulent (e.g. false information, stolen credit cards, selling counterfeit goods, etc.), as determined at LevoHost's sole discretion, will be reversed regardless of the amount of time that has passed since the signup occurred.</span>
                                        </li>

                                    </ul>

                                    <Link to="/">View Full T&C</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AffiliateTc;
