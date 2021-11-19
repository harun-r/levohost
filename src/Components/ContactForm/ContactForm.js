import React from 'react';
import {Container,Row,Col,Form,FloatingLabel,Button} from "react-bootstrap";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>For any <span>Query</span></h3>
                        <p>Whether you have a query about our product or services, offers, features, about our activities or anything else, our dedicated team members are always ready to answer all of your queries. Feel free to submit your queries, one of our team members will get back to you as soon as possible.</p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <FloatingLabel
                                controlId="name"
                                label="Your Name"
                                className="mb-3">
                                <Form.Control type="text" placeholder="name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="name"
                                label="Your Email"
                                className="mb-3">
                                <Form.Control type="text" placeholder="name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '140px' }}
                                />
                            </FloatingLabel>
                            <Button variant="primary" type="submit" className="lvh-btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;
