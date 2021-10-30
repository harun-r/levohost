import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import payment from '../../assets/images/css_sprite.png'
const Copyright = () => {
    return (
        <div className="copyright">
            <Container>
                <Row>
                    <Col>
                        <div className="copy-right-inner">
                            <p>Copyright © 2019-20 levohost.com All Rights Reserved</p>

                            <div className="payment">
                                <p>Payment Methods That We Accept:</p>
                                <Image src={payment}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Copyright;
