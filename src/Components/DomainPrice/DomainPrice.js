import React, {useState} from 'react';
import {Col, Container, Row, Table} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import SectionHeadV2 from "../SectionHeadV2/SectionHeadV2";

const DomainPrice = () => {
    const [DomainPrice, setDomainPrice] = useState([
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        },
        {
            id: uuidv4(),
            TLD: '.com',
            Register: '9.99',
            Renewal: '9.99',
            Transfer: '9.99',
        }
    ]);
    return (
        <div className="domain-price-bd">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}} className="text-center mb-4">
                        <SectionHeadV2
                            heading="Our Domain"
                            headingRed="Pricing"
                            desc="It is a great opportunity to open a new market in Bangladesh by registering your .BD domain name. Any person/organization from all over the world can apply for registration of domain with DOT BD and it takes a maximum of three (03) working days to activate the domain upon submitting order."
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table hover responsive size="sm">
                            <thead>
                            <tr>
                                <th>TLD</th>
                                <th className="text-center">Register</th>
                                <th className="text-center">Renewal</th>
                                <th className="text-center">Transfer</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                DomainPrice.map(domainPrices => {
                                    return(
                                        <tr key={domainPrices.id}>
                                            <td>{domainPrices.TLD}</td>
                                            <td className="text-center">${domainPrices.Register}</td>
                                            <td className="text-center">${domainPrices.Renewal}</td>
                                            <td className="text-end">${domainPrices.Transfer}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DomainPrice;
