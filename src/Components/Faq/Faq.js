import React from 'react';
import {Accordion, Container} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";
import AccordionItem from "../AccordionItem/AccordionItem";

const Faq = () => {
    return (
        <div className="faq-section">
            <Container>
                <SectionHeading
                    heading="Frequently Asked Questions (FAQ)"
                    desc="Below, you will find the most common questions that we get asked, we answered most of them here. Alternatively, connect with us through live chat, phone call or by support tickets."
                />

                <div className="faq-inner">
                    <Accordion defaultActiveKey="0">
                    <AccordionItem
                        faqNo="0"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                    <AccordionItem
                        faqNo="1"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                    <AccordionItem
                        faqNo="2"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                    <AccordionItem
                        faqNo="3"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                    <AccordionItem
                        faqNo="4"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                    <AccordionItem
                        faqNo="5"
                        faqQuestion="What is Web Hosting?"
                        faqAnswer="Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host."
                    />
                </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default Faq;
