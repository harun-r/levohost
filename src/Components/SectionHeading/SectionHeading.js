import React from 'react';


// === Common properties
// heading = string
// desc = string


const SectionHeading = props => {
    return (
        <div className="section-heading text-center">
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    );
};

export default SectionHeading;
