import React from 'react';
import avatar from '../../assets/images/review-img-1.png'
import {Image} from "react-bootstrap";

const ReviewItem = () => {
    return (
        <div className="review-item">
            <div className="review-quote-icon">
                <span className="material-icons">format_quote</span>
            </div>
            <div className="d-flex align-items-center">
                <div className="avatar avatar-circle">
                    <Image src={avatar}/>
                </div>
                <div className="review-star">
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                </div>
            </div>
            <div className="review-desc mt-3">
                <p>The best web hosting company with best business planning. I recommend every reader to take their services. You really wonâ€™t regret it.</p>
                <span>Quinn Smith</span>
                <small>CEO - Company</small>
            </div>
        </div>
    );
};

export default ReviewItem;
