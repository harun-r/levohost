import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

const TopHeader = () => {
  return (
    <div className="top-header bg-red py-2">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex align-items-center">
              <p className="me-4 call-us" href="/">
                Call-us on: <span>+880 173333-4333</span>
              </p>
            </div>
          </Col>
          <Col md={6} className="text-end">
            <div className="d-flex d-sm-inline-flex align-items-center">
              <a className="mx-2 mx-sm-4" href="/">
                <FontAwesomeIcon icon={faLifeRing} className="me-2" />
                Support Desk
              </a>
              <a className="me-4" href="/">
                Login
              </a>
              {/* <div className="social-profile">
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div> */}
              <div className="currency-btn">
                <Button variant="light">BDT</Button>
                <Button variant="light" className="acitve">
                  USD
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
