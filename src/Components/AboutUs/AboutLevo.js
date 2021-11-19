import React, {useState} from 'react';
import TextDescComon from "../SharedComponent/TextDescComon/TextDescComon";
import {Col, Container, Row} from "react-bootstrap";

const AboutLevo = () => {
    const initialAbout = [
        {
            aboutClass:'text-center'
        }
    ]
    const [about, setAbout] = useState(initialAbout);


    return (
        <div className="about-levohost">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}}>
                        <TextDescComon
                            headCenter={about.aboutClass}
                            syntext="About"
                            name="LevoHost"
                            desc_1="LevoHost is a global provider of Web hosting and its related services. LevoHost's main target is to provide super fast & secure web hosting and its related services with the highest customer service at an affordable price."
                            desc_2="Our hosting packages are an easy-as-pie way to get a great website up and running.We sorted the hosting packages more user-friendly and well configured. Whether you are a Student, Blogger, Designer, Developer, or a Businessperson, we've got you covered."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutLevo;
