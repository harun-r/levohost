import React, {useState} from 'react';
import {Col, Container,Row,Table} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';


const BdDomainPrice = () => {
    const [bdDomainPrice, setBdDomainPrice] = useState([
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        },
        {
            id: uuidv4(),
            domainExtension: '.com.bd',
            description: 'Intended For Commercial Entities And Purposes',
            registration: 'BDT 2150 / 2yr',
            renewal: 'BDT 2150 / 2yr',
        }
    ]);
    const [DomainDoc, setDomainDoc] = useState([
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        },
        {
            id: uuidv4(),
            purpose: 'For individual accounts',
            requiredDocuments: 'Scanned Copy Of NID Or Passport',
            other: 'Full Name, Email, Phone'
        }
    ])

    return (
        <div className="domain-price-bd">
            <Container>
                <Row>
                    <Col md={{span:10, offset:1}} className="text-center domain-price-bd-head">
                        <h3>.BD Domain <span>Pricing</span></h3>
                        <p>It is a great opportunity to open a new market in Bangladesh by registering your .BD domain name. Any person/organization from all over the world can apply for registration of domain with DOT BD and it takes a maximum of three (03) working days to activate the domain upon submitting order.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table hover responsive size="sm">
                            <thead>
                                <tr>
                                    <th>Domain Extension</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center">Registration</th>
                                    <th className="text-end">Renewal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bdDomainPrice.map(domainPrice => {
                                        return(
                                            <tr key={domainPrice.id}>
                                                <td>{domainPrice.domainExtension}</td>
                                                <td className="text-center">{domainPrice.description}</td>
                                                <td className="text-center">{domainPrice.registration}</td>
                                                <td className="text-end">{domainPrice.renewal}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                        <div className="table-hint">
                            <span className="d-block font-12 mb-1">*Payment is non-refundable. So, please know details of the summary & particulars of the invoice & proceed to make payment.</span>
                            <span className="d-block font-12 mb-1">*Forwarding letter should be in favor of Divisional Engineer (Administration & coordination), Bangladesh Telecommunications Company Limited (BTCL).</span>
                            <span className="d-block font-12 mb-1">*You must obey the terms & conditions of BTCL to avoid any suspension/deactivation of your domain name.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="domain-document">
                            <h3>Prerequisite Documents For Domain Registration</h3>
                            <Table hover responsive size="sm">
                                <thead>
                                <tr>
                                    <th>Purpose</th>
                                    <th className="text-center">Required Documents</th>
                                    <th className="text-end">Other</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    DomainDoc.map(DomainDocs => {
                                        return(
                                            <tr key={DomainDocs.id}>
                                                <td>{DomainDocs.purpose}</td>
                                                <td className="text-center">{DomainDocs.requiredDocuments}</td>
                                                <td className="text-end">{DomainDocs.other}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BdDomainPrice;
