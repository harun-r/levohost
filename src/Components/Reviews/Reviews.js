import React from 'react';
import {Container, Button} from "react-bootstrap";
import SectionHeading from "../SectionHeading/SectionHeading";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReviewItem from "./ReviewItem";


const Reviews = () => {
    let settings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerPadding: '60px',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="reviews-section">
            <Container>
                {/*Section Header*/}
                <SectionHeading
                    heading="Champions Reviews"
                    desc="You can get the satisfaction by reading the reviews of our previous champions who gave us a chance to serve them."
                />
                {/*Review List*/}
                <div className="reviews-list">
                    <Slider {...settings}>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                        <ReviewItem/>
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;
