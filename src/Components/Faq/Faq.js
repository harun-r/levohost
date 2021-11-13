import React from 'react';
import {Accordion, Container} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";
import FaqSec from "./FaqSec/FaqSec";

const Faq = () => {
    return (
        <div className="faq-wrap">
            <Container>
                <SectionHeading
                    heading="Frequently Asked Questions (FAQ)"
                    desc="Below, you will find the most common questions that we get asked, we answered most of them here. Alternatively, connect with us through live chat, phone call or by support tickets."
                />
            </Container>
            <FaqSec/>
        </div>
    );
};

export default Faq;
