import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const HostingPlanItem = () => {
    return (
        <div className="hosting-plan-wrap">
            <div className="hosting-plan">
                <header>
                    <h3 className="heading">
                        VPS <br/>
                        SSD Starter
                    </h3>
                    <h4 className="price">
                        $12.99 <small>/mo ex VAT</small>
                    </h4>
                    <p><strong>Small but powerful VPS</strong> with the same SSD based storage as our more advanced server plans.</p>
                </header>
                <Button variant="primary" className="btn-order">Order Now</Button>
                <div className="plan-feature">

                    <ul>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                2 vCPU Cores
                            </p>
                            <p className="advanced-text">Fast Intel Xeon based virtual cores.</p>
                        </li>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                2GB RAM
                            </p>
                            <p className="advanced-text">High performance ECC memory.</p>
                        </li>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                30GB SSD Storage
                                <span>NEW</span>
                            </p>
                            <p className="advanced-text">Enterprise class SSD storage for lightning fast performance.</p>
                        </li>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                Unmetered Bandwidth
                            </p>
                            <p className="advanced-text">Up to 1Gbit network speed and unmetered bandwidth.</p>
                        </li>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                cPanel or Plesk (Optional)
                            </p>
                            <p className="advanced-text">Optional cPanel/WHM or Plesk, or select no control panel, the
                                choice is yours.</p>
                        </li>
                        <li>
                            <span className="material-icons">verified_user</span>
                            <p className="feature-name">
                                24x7 Pro Technical Support
                            </p>
                            <p className="advanced-text">Phone, livechat and ticket support available 24x7x365</p>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-link" to="/">
                    <span className="material-icons">expand_more</span> Expand Features
                </Link>

            </div>
        </div>
    );
};

export default HostingPlanItem;
