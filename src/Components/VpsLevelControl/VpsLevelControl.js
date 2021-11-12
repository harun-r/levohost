import React from 'react';
import {Container, Row, Col, Image, Accordion} from "react-bootstrap";
import imgLevel from '../../assets/images/img-1.png';
import AccordionItem from "../AccordionItem/AccordionItem";
import SectionHeadingBig from "../SharedComponent/SectionHeadingBig/SectionHeadingBig";

const VpsLevelControl = () => {
    return (
        <div className="vps-level-hosting">
             <Container>
                 <SectionHeadingBig heading="Top uses for BPS-level Control" />
                 <Row className="mt-5">
                     <Col md={6}>
                         <div className="image">
                             <Image src={imgLevel}  />
                         </div>
                     </Col>
                     <Col md={6}>
                         <div className="content">
                             <Accordion className="accordion-left-arrow" defaultActiveKey="0">
                                 <AccordionItem
                                     faqNo="0"
                                     faqQuestion="Web Hosting"
                                     faqAnswer="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essen"
                                 />
                                 <AccordionItem
                                     faqNo="1"
                                     faqQuestion="eCommerce"
                                     faqAnswer="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essen"
                                 />
                                 <AccordionItem
                                     faqNo="2"
                                     faqQuestion="Heavy app & email use"
                                     faqAnswer="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essen"
                                 />
                                 <AccordionItem
                                     faqNo="3"
                                     faqQuestion="Test environment"
                                     faqAnswer="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essen"
                                 />
                                 <AccordionItem
                                     faqNo="4"
                                     faqQuestion="Gaming"
                                     faqAnswer="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essen"
                                 />
                             </Accordion>
                         </div>
                     </Col>
                 </Row>
             </Container>
        </div>
    );
};

export default VpsLevelControl;
