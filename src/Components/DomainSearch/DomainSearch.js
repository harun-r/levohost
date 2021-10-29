import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

const DomainSearch = () => {
    return (
        <div className="domain-search">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <div className="search_domain_box">
                            <h2>Choose Your Domain Today!</h2>
                            <p>Get Perfect Domain Name from Hostiko.</p>
                            <Form className="domain-search-form">
                                <Form.Group>
                                    <Form.Control className="search_domain_field" type="text" placeholder="Enter Your Domain Name:" />
                                    <Button variant="primary" className="lvh-btn" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DomainSearch;
