import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import SectionHeading from "../Components/SectionHeading/SectionHeading";
import FaqSec from "../Components/Faq/FaqSec/FaqSec";
import {Col, Container, Row} from "react-bootstrap";

const FaqAll = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Frequently Asked Questions"
            />
            <div className="mt-5 pt-4">
                <SectionHeading
                    heading="Frequently Asked Questions (FAQ)"
                    desc="Below, you will find the most common questions that we get asked, we answered most of them here.Alternatively, connect with us through live chat, phone call or by support tickets."
                />

                <Container>
                    <Row>
                        <Col className="mt-5">
                            <h3>Domain Name:</h3>
                            <FaqSec/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h3>Shared Web Hosting:</h3>
                            <FaqSec/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h3>Business Hosting:</h3>
                            <FaqSec/>
                        </Col>
                    </Row>
                </Container>

            </div>

            <Footer/>
        </Fragment>
    );
};

export default FaqAll;
