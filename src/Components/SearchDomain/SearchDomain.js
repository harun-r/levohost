import React from 'react';
import {Container, Row,Col} from "react-bootstrap";
import DomainSearchForm from "../DomainSearchForm/DomainSearchForm";

const SearchDomain = () => {
    return (
        <div className="search-domain-section">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="search-domain-box">
                            <h3>Find Your <span>.BD Domain Name</span></h3>
                            <p>NEED HELP OR SUGGESTION ?? Call Us at <u>+880 173333 4333</u></p>
                            <div className="domain-search-sm">
                                <DomainSearchForm/>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="search-text">
                            <h3 className="mb-4">country code Top-Level Domain (ccTLD) for Bangladesh</h3>
                            <p>.BD domain is the country code top-level domain (ccTLD) for Bangladesh. It is administered by Bangladesh Telecommunications Company Limited (BTCL). Currently, registration is available to anyone under the .COM.BD, .NET.BD, .GOV.BD, .ORG.BD, MIL.BD and .EDU.BD domain extension.</p>
                            <p>LevoHost is the authorized .bd Domain name registration service provider of BTCL. Any person/organization from all over the world can apply for registration of domain with DOT BD and it takes a maximum of three (03) working days to activate the domain upon submitting order. BD domain must be registered for a minimum of 2 years.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchDomain;
