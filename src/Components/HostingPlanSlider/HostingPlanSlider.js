import React from 'react';
import SectionHeading from "../SectionHeading/SectionHeading";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HostingPlanItem from "./HostingPlanItem";
import {Container} from "react-bootstrap";

const HostingPlanSlider = () => {
    let settings = {
        dots: false,
        arrows: true,
        infinite: false,
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
        <div className="hosting-plan-slider">
            <SectionHeading
                heading="VPS Hosting Plans"
                desc="Big or small, website or application - we have a VPS configuration for you."
            />

            <div className="hosting-plan-slider-inner">
                <Container>
                    <Slider {...settings}>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                        <HostingPlanItem/>
                    </Slider>
                </Container>
            </div>
        </div>
    );
};

export default HostingPlanSlider;
