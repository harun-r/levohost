import React from 'react';
import {Button, Form} from "react-bootstrap";

const DomainSearchForm = () => {
    return (
        <Form className="domain-search-form">
            <Form.Group>
                <Form.Control className="search_domain_field" type="text" placeholder="Enter Your Domain Name:" />
                <Button variant="primary" className="lvh-btn" type="submit">
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
};

export default DomainSearchForm;
