import React from 'react';

const SectionHeadV2 = (props) => {
    if(props.desc){
        return (
            <div className="section-head-color">
                <h3>{props.heading} <span>{props.headingRed}</span></h3>
                <p>{props.desc}</p>
            </div>
        );
    }else{
        return (
            <div className="section-head-color">
                <h3>{props.heading} <span>{props.headingRed}</span></h3>
            </div>
        );
    }

};

export default SectionHeadV2;
