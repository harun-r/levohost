import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import FooterItem from "./FooterItem";
import Copyright from "./Copyright";

import logo from '../../assets/images/logo.png';
import dmca from '../../assets/images/dmca-badge-w150-5x1-06.png';


const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row>
                    <Col md={8} sm={12}>
                        <Row>
                            <Col md={3} xs={6}>
                                <FooterItem
                                    item_name ="Product / Services"
                                />
                            </Col>
                            <Col md={3} xs={6}>
                                <FooterItem
                                    item_name ="Member Area"
                                />
                            </Col>
                            <Col md={3} xs={6}>
                                <FooterItem
                                    item_name ="Help"
                                />
                            </Col>
                            <Col md={3} xs={6} >
                                <FooterItem
                                    item_name ="Company"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="footer-info">
                           <span className="mb-3 d-block logo">
                                <Image src={logo} />
                           </span>
                           <p>
                               <span className="material-icons">home</span>
                               62/6, West Tejturi Bazar, Dhaka
                           </p>
                            <p>
                                <span className="material-icons">mail</span>
                                info@levohost.com
                            </p>
                            <p>
                                <span className="material-icons">email</span>
                                support@levohost.com
                            </p>
                            <p>
                                <span className="material-icons">call</span>
                                +880 173333-4333
                            </p>
                            <p>
                                <span className="material-icons">call</span>
                                +880 1723-004411
                            </p>

                            <a href="/">
                                <Image src={dmca}/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Copyright/>
        </div>

    );
};

export default Footer;
