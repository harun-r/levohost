import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import Copyright from "./Copyright";

import logo from '../../assets/images/logo.png';
import dmca from '../../assets/images/dmca-badge-w150-5x1-06.png';
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row>
                    <Col md={8} sm={12}>
                        <Row>
                            <Col md={3} xs={6}>
                                <div className="footer-item">
                                    <h3>Product / Services</h3>
                                    <ul>
                                        <li><Link to="/shared-hosting">Shared Hosting</Link></li>
                                        <li><Link to="/business-hosting">Business Hosting</Link></li>
                                        <li><Link to="/reseller-hosting">Reseller Hosting</Link></li>
                                        <li><Link to="/vps-hosting">VPS Hosting</Link></li>
                                        <li><Link to="/dedicated-servers">Dedicated Server </Link></li>
                                        <li><Link to="/ssl-certificate">SSL Certificate</Link></li>
                                        <li><Link to="/">Domain Registration</Link></li>
                                        <li><Link to="/">.BD Domain </Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3} xs={6}>
                                <div className="footer-item">
                                    <h3>Member Area</h3>
                                    <ul>
                                        <li><Link to="/">Member Login</Link></li>
                                        <li><Link to="/">Announcement</Link></li>
                                        <li><Link to="/">Knowledge Base</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3} xs={6}>
                                <div className="footer-item">
                                    <h3>Help</h3>
                                    <ul>
                                        <li><Link to="/">Submit Support Ticket</Link></li>
                                        <li><Link to="/">Live Chat</Link></li>
                                        <li><Link to="/faq">FAQ</Link></li>
                                        <li><Link to="/">Network Status</Link></li>
                                        <li><Link to="/">Report Abuse </Link></li>
                                        <li><Link to="/">Sitemap</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={3} xs={6} >
                                <div className="footer-item">
                                    <h3>Company</h3>
                                    <ul>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/affiliate">Affiliate Program</Link></li>
                                        <li><Link to="/tos">Terms Of Services </Link></li>
                                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    </ul>
                                </div>
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
