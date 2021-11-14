import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import itemImg from '../../../assets/images/wordpress.jpg'

const OperatingSupport = () => {
    return (
        <div className="operating-support">
            <Container>
                <Row>
                    <Col md={{span:8, offset:2}}>
                        <h3>Available Operating Systems</h3>

                        <div className="operating-systems-items">
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                            <div className="item">
                                <Image src={itemImg}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OperatingSupport;
