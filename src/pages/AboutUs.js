import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import SupportBlock from "../Components/SupportBlock/SupportBlock";
import Footer from "../Components/Footer/Footer";
import AboutLevo from "../Components/AboutUs/AboutLevo";
import OurHistory from "../Components/AboutUs/OurHistory";
import OurVisionMission from "../Components/AboutUs/OurVisionMission";
import OurTeam from "../Components/OurTeam/OurTeam";

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
            <SupportBlock/>
            <Footer/>
        </Fragment>
    );
};

export default AboutUs;
