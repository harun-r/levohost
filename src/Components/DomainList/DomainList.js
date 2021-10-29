import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import domain_1 from '../../assets/images/domain_img01.png';
import domain_2 from '../../assets/images/domain_img02.png';
import domain_3 from '../../assets/images/domain_img03.png';
import domain_4 from '../../assets/images/domain_img04.png';
import domain_5 from '../../assets/images/domain_img05.png';

const DomainList = () => {
    return (
        <div className="domain-list">
            <Container>
                <Row>
                    <Col md={{span:10, offset: 1}}>
                        <ul>
                            <li>
                                <Image src={domain_1} />
                                <span> $5.99</span>
                            </li>
                            <li>
                                <Image src={domain_2} />
                                <span> $5.99</span>
                            </li>
                            <li>
                                <Image src={domain_3} />
                                <span> $5.99</span>
                            </li>
                            <li>
                                <Image src={domain_4} />
                                <span> $5.99</span>
                            </li>
                            <li>
                                <Image src={domain_5} />
                                <span> $5.99</span>
                            </li>

                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DomainList;
