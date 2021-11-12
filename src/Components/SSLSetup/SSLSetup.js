import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";

const SslSetup = () => {
    return (
        <div className="ssl-setup">
            <Container>
                <SectionHeading
                    heading="SSL certification in Four Easy Steps"
                    desc="After you purchase an SSL certificate, it needs to be activated. After activation, you’ll receive installation instructions. From that point, you can manage your certificate in the Namecheap Account Panel."
                />
                <Row className="mt-5">
                    <Col md={3}>
                        <div className="setup-card">
                            <header className="setup-card-head">
                                <h2>1</h2>
                            </header>
                            <div className="setup-card-body">
                                <h3>buy it</h3>
                                <p>Begin by purchasing the right SSL certificate for your needs. Choose from the three types listed above.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="setup-card">
                            <header className="setup-card-head">
                                <h2>2</h2>
                            </header>
                            <div className="setup-card-body">
                                <h3>Activate It</h3>
                                <p>You’ll be able to activate your SSL certificate from the Account Panel immediately after purchase (or at a later time, if you choose.) CSR code assignment and domain name indication will occur during the activation process.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="setup-card">
                            <header className="setup-card-head">
                                <h2>3</h2>
                            </header>
                            <div className="setup-card-body">
                                <h3>Install It</h3>
                                <p>You will receive instructions on how to install your SSL certificate once it has been validated and issued. Click here for more information on the installation process.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="setup-card">
                            <header className="setup-card-head">
                                <h2>4</h2>
                            </header>
                            <div className="setup-card-body">
                                <h3>Manage It</h3>
                                <p>You may manage your SSL certificates (including renewal and reissuance) in your Account Panel.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SslSetup;
