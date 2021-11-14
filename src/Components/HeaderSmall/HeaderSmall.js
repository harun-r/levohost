import React from 'react';

const HeaderSmall = (props) => {
    return (
        <div className="header-small text-center">
            <h3>{props.heading}</h3>
            <p>{props.desc}</p>
        </div>
    );
};

export default HeaderSmall;
