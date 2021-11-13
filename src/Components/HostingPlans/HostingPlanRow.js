import React, {Fragment} from 'react';
import {Accordion, Col, Row} from "react-bootstrap";

const HostingPlanRow = (props) => {
    return (
        <Fragment>
            <Accordion.Item eventKey={props.planNo}>
                <Accordion.Header>{props.planName}</Accordion.Header>
                <Accordion.Body>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>Disk Space </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>20 GB SSD</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>Unmetered SSD</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>50 GB SSD</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gx-0">
                        <Col xs={2}>
                            <div className="plan-heading">
                                <h3>File (Inode) Limit  </h3>
                                <span className="material-icons">help</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>300.000</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="plan-col">
                                <p>600.000</p>
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Fragment>
    );
};

export default HostingPlanRow;
