import React from 'react';

const TextDescComon = (props) => {
    return (
        <div className="common-text-desc">
            <h3 className={props.headCenter}>{props.syntext} <span>{props.name}</span></h3>
            <p>{props.desc_1}</p>
            <p>{props.desc_2}</p>
        </div>
    );
};

export default TextDescComon;
