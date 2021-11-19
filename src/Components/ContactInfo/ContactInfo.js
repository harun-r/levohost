import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import { Facebook, Twitter, Linkedin } from 'react-feather';
import contactMan from '../../assets/images/support_man.png'
import Iframe from "react-iframe";
import {Link} from "react-router-dom";

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="contact-infos">
                            <span className="blank-space"></span>
                            <span className="blank-space"></span>
                            <h3>Need Help? <span>Let's Talk</span></h3>

                            <div className="mb-4">
                                <h4>Phone Numbers:</h4>
                                <p>+880 173333 4333</p>
                                <p>+880 1723 004411 </p>
                            </div>
                            <div className="mb-4">
                                <h4>Email Addresses:</h4>
                                <p>info@levohost.com</p>
                                <p>contact@levohost.com</p>
                            </div>
                            <div className="mb-4">
                                <h4>Address:</h4>
                                <p>62/6, West Tejturi Bazar, Farmgate, Dhaka 1215, Bangladesh</p>
                            </div>
                            <div>
                                <h4>Social:</h4>
                                <ul>
                                    <li><Link to="/"> <Facebook  size={22} />  </Link></li>
                                    <li><Link to="/"> <Twitter  size={22} />  </Link></li>
                                    <li><Link to="/"> <Linkedin  size={22} />  </Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-img">
                            <Image src={contactMan}/>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="google-map mb-5">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.604248453179!2d90.38425380000001!3d23.750907299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1581007231501!5m2!1sen!2sbd"
                                width="100%"
                                height="600"
                                allowFullScreen=""
                                frameBorder="0"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactInfo;
