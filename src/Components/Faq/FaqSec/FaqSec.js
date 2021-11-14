import React from 'react';
import {Accordion, Container} from "react-bootstrap";
import AccordionItem from "../../AccordionItem/AccordionItem";

const FaqSec = () => {
    return (
        <div className="faq-section">
            <Container>
                <div className="faq-inner">
                    <Accordion className="accordion-faq" defaultActiveKey="0">
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
            <p className="faq-hint">The latest revision of this Privacy Policy was published on February 25, 2020.</p>
        </div>
    );
};

export default FaqSec;
