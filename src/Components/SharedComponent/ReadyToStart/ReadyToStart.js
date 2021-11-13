import React from 'react';
import {Button} from 'react-bootstrap'

const ReadyToStart = () => {
    return (
        <div className="ready-to-start text-center">
            <h3 className="text-white font-42 mb-3">Ready To Get Started?</h3>
            <p className="text-white font-18 mb-4">Choose the hosting provider that helps you start easy, build fast, and grow strong! It’s risk-free with our 30-days money back guarantee.</p>
            <Button variant="success" className="btn-border-1 mt-4">get started</Button>
        </div>
    );
};

export default ReadyToStart;
