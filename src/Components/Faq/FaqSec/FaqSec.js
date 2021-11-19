import React, {useContext} from 'react';
import {Accordion, Container} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import AccordionItem from "../../AccordionItem/AccordionItem";
import {DataContext} from "../../../Contexts/DataContext";

const FaqSec = () => {
    const {faqGeneral} = useContext(DataContext);
    return (
        <div className="faq-section">
            <Container>
                <div className="faq-inner">
                    <Accordion className="accordion-faq" defaultActiveKey="0">
                        {
                            faqGeneral.map(faq => {
                                return(
                                    <AccordionItem
                                        faqNo={faq.id}
                                        faqQuestion={faq.question}
                                        faqAnswer={ReactHtmlParser(faq.answer)}
                                    />
                                )
                            })
                        }
                    </Accordion>
                </div>
            </Container>
            <p className="faq-hint">The latest revision of this Privacy Policy was published on February 25, 2020.</p>
        </div>
    );
};

export default FaqSec;
