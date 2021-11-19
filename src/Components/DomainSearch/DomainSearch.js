import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import DomainSearchForm from "../DomainSearchForm/DomainSearchForm";

const DomainSearch = () => {
    return (
        <div className="domain-search">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <div className="search_domain_box">
                            <h2>Choose Your Domain Today!</h2>
                            <p>Get Perfect Domain Name from Hostiko.</p>
                            <DomainSearchForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DomainSearch;
