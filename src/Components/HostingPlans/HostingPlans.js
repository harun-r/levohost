import React from 'react';
import {Col, Container, Row, ButtonGroup, Button, Accordion} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";
import HostingPlanRow from "./HostingPlanRow";

const HostingPlans = () => {
    const handleClick=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div className="hosting-plans">
            <Container>
                <SectionHeading
                    heading="Choose your web hosting plan"
                    desc="Get a Free SSL Certificate with any of our web hosting plans"
                />
                <Row>
                    <Col md={12} className="text-center my-4 hosting-dur-btn">
                        <ButtonGroup onClick={handleClick}>
                            <Button value="monthly" variant="outline-secondary active">Monthly</Button>
                            <Button value="1year" variant="outline-secondary">1 Year</Button>
                            <Button value="3year" variant="outline-secondary">3 Year</Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <div className="div-responsive">
                    <Row>
                        <Col md={12}>
                            <div className="hosting-plans-head mt-5">
                                <Row className="gx-0">
                                    <Col xs={2}>
                                        <div className="plan-head-card text-start">
                                            <h5>UK and EU datacenter selections will result in a different price.</h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="plan-head-card">
                                            <p>Stellar</p>
                                            <h3>$1.44/mo</h3>
                                            <span>$2.88/mo</span>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="plan-head-card">
                                            <p>Stellar Plus</p>
                                            <h3>$2.44/mo</h3>
                                            <span>$4.88/mo</span>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="plan-head-card">
                                            <p>Stellar Business</p>
                                            <h3>$4.44/mo</h3>
                                            <span>$8.88/mo</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Accordion defaultActiveKey="0" className="hosting-plans-toggle">
                                <HostingPlanRow
                                    planNo="0"
                                    planName="Plan Features"
                                />
                                <HostingPlanRow
                                    planNo="1"
                                    planName="Email Features"
                                />
                                <HostingPlanRow
                                    planNo="2"
                                    planName="Databases Features"
                                />
                                <HostingPlanRow
                                    planNo="3"
                                    planName="Server Features"
                                />
                                <HostingPlanRow
                                    planNo="4"
                                    planName="Control Panel Features"
                                />
                                <HostingPlanRow
                                    planNo="5"
                                    planName="Statistic/Web Stats"
                                />
                                <HostingPlanRow
                                    planNo="6"
                                    planName="Scripts"
                                />
                                <HostingPlanRow
                                    planNo="7"
                                    planName="Support Features"
                                />
                                <HostingPlanRow
                                    planNo="8"
                                    planName="Pricing"
                                />

                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HostingPlans;
