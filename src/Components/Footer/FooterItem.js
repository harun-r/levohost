import React from 'react';

const FooterItem = props => {
    return (
        <div className="footer-item">
            <h3>{props.item_name}</h3>
            <ul>
                <li><a href="/">Shared Hosting</a></li>
                <li><a href="/">Business Hosting</a></li>
                <li><a href="/">Reseller Hosting</a></li>
                <li><a href="/">VPS Hosting</a></li>
                <li><a href="/">Dedicated Server </a></li>
                <li><a href="/">SSL Certificate</a></li>
                <li><a href="/">Domain Registration</a></li>
                <li><a href="/">.BD Domain </a></li>
            </ul>
        </div>
    );
};

export default FooterItem;
