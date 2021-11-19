import React from 'react';
import SectionHeading from "../SectionHeading/SectionHeading";
import {Col, Container, Row} from "react-bootstrap";
import FaqSec from "./FaqSec/FaqSec";

const FaqsAllSec = () => {
    return (
        <div className="paq-page-sections">
            <SectionHeading
                heading="Frequently Asked Questions (FAQ)"
                desc="Below, you will find the most common questions that we get asked, we answered most of them here.Alternatively, connect with us through live chat, phone call or by support tickets."
            />

            <div className="faq-card-wrap">
                <Container>
                    <Row>
                        <Col>
                            <h3>Domain Name:</h3>
                        </Col>
                    </Row>
                </Container>
                <FaqSec/>
            </div>
            <div className="faq-card-wrap">
                <Container>
                    <Row>
                        <Col>
                            <h3>Shared Web Hosting:</h3>
                        </Col>
                    </Row>
                </Container>
                <FaqSec/>
            </div>
            <div className="faq-card-wrap">
                <Container>
                    <Row>
                        <Col>
                            <h3>Business Hosting:</h3>
                        </Col>
                    </Row>
                </Container>
                <FaqSec/>
            </div>
        </div>
    );
};

export default FaqsAllSec;
