import React from 'react';

/*
Props
heading = string
desc = string
* */

const SectionHeaderTwo = (props) => {
    return (
        <div className="section-head-two text-center">
            <span>{props.heading}</span>
            <h3>{props.desc}</h3>
        </div>
    );
};

export default SectionHeaderTwo;

