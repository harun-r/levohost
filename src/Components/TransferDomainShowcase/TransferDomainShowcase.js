import React from 'react';
import {Button} from 'react-bootstrap'

const TransferDomainShowcase = () => {
    return (
        <div className="transfer-domain-showcase">
            <h3>Already have a domain name?
                Let’s go live with it!</h3>
            <p>You can easily transfer Your domain name from your current registrar to us with just few clicks!</p>
            <Button variant="danger" className="lvh-btn">Transfer it now!</Button>
        </div>
    );
};

export default TransferDomainShowcase;
