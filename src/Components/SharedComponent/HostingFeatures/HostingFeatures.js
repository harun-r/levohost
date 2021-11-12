import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import hostingFet from '../../../assets/images/cheap-web.png'
import SectionHeaderTwo from "../SectionHeaderTwo/SectionHeaderTwo";

const HostingFeatures = () => {
    return (
        <div className="hosting-features">
            <Container>
                {/*Section Headign*/}
                <SectionHeaderTwo
                    heading="VPS features"
                    desc="VPS hosting platform features"

                />
                <span className="blank-space"></span>
                {/*Content*/}
                <Row className="justify-content-between">
                    <Col md={{span:4, order:2}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="hosting-feature">
                            <h3>A Reliable & Affordable Hosting Option</h3>
                            <p>Interserver.net offers one of the most affordable VPS plans in the market on which you can trust without giving yourself a second thought. With our VPS hosting, you can customize the resources according to your needs.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between mt-5">
                    <Col md={{span:4}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="hosting-feature">
                            <h3>Access Your Data
                                Anywhere, Anytime</h3>
                            <p>We don't put any limit when it comes to accessing or updating your data and service. You are free to access your files, folders, databases, and other resources anywhere from around the world whenever you want.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-between mt-5">
                    <Col md={{span:4, order:2}}>
                        <div className="hosting-features-img">
                            <Image src={hostingFet} />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="hosting-feature">
                            <h3>A Reliable & Affordable Hosting Option</h3>
                            <p>Interserver.net offers one of the most affordable VPS plans in the market on which you can trust without giving yourself a second thought. With our VPS hosting, you can customize the resources according to your needs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HostingFeatures;
