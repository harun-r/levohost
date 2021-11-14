import React from 'react';
import {Col,Row, Container} from "react-bootstrap";

const ListSection = () => {
    return (
        <div className="list-section">
            <Container>
                <Row>
                    <Col md={{span:10,offset:1}}>
                        <h3>Why become a <span>levoHost Affiliate?</span></h3>

                        <Row>
                            <Col md={4}>
                                <div className="list-card">
                                    <ul>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>High Conversion Rate</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Unlimited payouts! No caps on your earning potential!</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Wide Selection of Creatives, Content & Banners</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="list-card">
                                    <ul>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Weekly Payout </span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Active & Responsive Affiliate Program Management </span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Unique Affiliate Tracking URL</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="list-card">
                                    <ul>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Custom Offers for Top Performers</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Easy-to-Use Dashboard</span>
                                        </li>
                                        <li>
                                            <span className="material-icons">radio_button_checked</span>
                                            <span>Long 60-Day Cookie Life</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListSection;
