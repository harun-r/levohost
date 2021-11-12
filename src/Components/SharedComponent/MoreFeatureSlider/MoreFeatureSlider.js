import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoreFeatureSliderItem from "./MoreFeatureSliderItem";

const MoreFeatureSlider = () => {
let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
            }
        }
    ]
};
    return (
        <div className="more-feature-slider">
            <header className="text-center">
                <h3>Are you looking for something else?</h3>
            </header>

            <div className="full-page-slider">
                <Slider  {...settings}>
                    <MoreFeatureSliderItem/>
                    <MoreFeatureSliderItem/>
                    <MoreFeatureSliderItem/>
                    <MoreFeatureSliderItem/>
                    <MoreFeatureSliderItem/>
                    <MoreFeatureSliderItem/>
                </Slider>
            </div>
        </div>
    );
};

export default MoreFeatureSlider;
