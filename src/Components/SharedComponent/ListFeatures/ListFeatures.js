import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const ListFeatures = () => {
    return (
        <div className="list-features">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h3>Self Managed Dedicated Server Hosting Popular uses</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae deleniti doloribus ipsam </p>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={4}>
                        <ul>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Big data</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Website and application hosting</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>

                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Big data</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Website and application hosting</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>

                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Big data</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Website and application hosting</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>
                            <li>
                                <span className="material-icons">done</span>
                                <span>Infrasture virtualization</span>
                            </li>

                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListFeatures;
