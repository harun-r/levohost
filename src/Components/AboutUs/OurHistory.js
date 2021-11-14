import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TextDescComon from "../SharedComponent/TextDescComon/TextDescComon";

const OurHistory = () => {
    return (
        <div className="our-history">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <TextDescComon
                            headCenter="text-center"
                            syntext="Our"
                            name="History"
                            desc_1="At the end of 2015, LevoHost was established by MD Golam Rabbani. By profession, he was a freelance web developer & now he’s the CEO of LevoHost."
                            desc_2="It was 2011, when Golam Rabbani was a freelance web developer and sometimes for client demand, he used to purchase the domain and hosting services from different media at a low/cheap price. But having the cheap rate he continuously used to face some problems like not getting all the features, mostly server-down or slow website loading. Moreover, when he used to contact the customer service for solving those issues then he did not get a solution at the proper time. For this reason, his clients also lost many customers and faced losses in business. So, after thinking about those issues and giving more advanced support he bought a Re-seller hosting package and started giving hosting support from there. Like this, when he had 100+ customers then he decided to open a hosting company so that he can give his highest support & service at a reasonable price to both his client and other people. Following the thought, he established HostGarden in 2015, where now more than a thousand of happy customers are receiving hosting related services."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurHistory;
