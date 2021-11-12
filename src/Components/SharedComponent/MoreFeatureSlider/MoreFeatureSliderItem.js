import React from 'react';
import {Button} from 'react-bootstrap'
const MoreFeatureSliderItem = () => {
    return (
        <div className="more-feature-slider-item">
            <div className="slider-body">
                <h3 className="title">Wordpress Hosting</h3>
                <p className="sub-title">Perfect personal website</p>

                <div className="features">
                    <ul>
                        <li>
                            <span className="material-icons">done</span>
                            <span>Big data</span>
                        </li>
                        <li>
                            <span className="material-icons">done</span>
                            <span>Domain privacy protection</span>
                        </li>
                        <li>
                            <span className="material-icons">done</span>
                            <span>Trusted domain resgistrar</span>
                        </li>
                        <li>
                            <span className="material-icons">done</span>
                            <span>Wide variety of TLDs</span>
                        </li>

                    </ul>
                </div>

            </div>
            <footer>
                <Button variant="info">
                    <span className="from">from</span>
                    <span className="price">$0.99 <small>/m</small></span>
                </Button>
            </footer>
        </div>
    );
};

export default MoreFeatureSliderItem;
