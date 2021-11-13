import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import AboutLevo from "../Components/AboutUs/AboutLevo";
import OurHistory from "../Components/AboutUs/OurHistory";
import OurVisionMission from "../Components/AboutUs/OurVisionMission";
import OurTeam from "../Components/OurTeam/OurTeam";
import WhatSection from "../Components/SharedComponent/WhatSection/WhatSection";
import Reviews from "../Components/Reviews/Reviews";

const AboutUs = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="About Us"
                desc="LevoHost - Fast, Secure & Reliable Web Hosting Solution"
            />
            <AboutLevo/>
            <OurHistory/>
            <OurVisionMission/>
            <OurTeam/>
            <WhatSection
                spcStyle="text-white bg-dark"
                btnName="light"

                heading="Interested in joining the LevoHost family? We're hiring"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque cumque eos illo illum impedit in iusto laudantium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam? tium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam?"
                btnText="Join our Team"

            />
            <Reviews/>
            <Footer/>
        </Fragment>
    );
};

export default AboutUs;
