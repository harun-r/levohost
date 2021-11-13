import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import AboutLevo from "../Components/AboutUs/AboutLevo";
import OurHistory from "../Components/AboutUs/OurHistory";
import OurVisionMission from "../Components/AboutUs/OurVisionMission";
import OurTeam from "../Components/OurTeam/OurTeam";
import WhatSection from "../Components/SharedComponent/WhatSection/WhatSection";
import Reviews from "../Components/Reviews/Reviews";
import Footer from "../Components/Footer/Footer";
import HowAffiliateWork from "../Components/HowAffiliateWork/HowAffiliateWork";

const Affiliate = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Join the Affiliate Team"
                desc="Get commissions each time you refer a new customer to LevoHost!"
            />
            <HowAffiliateWork/>
            <OurHistory/>
            <OurVisionMission/>
            <OurTeam/>
            <WhatSection
                spcStyle="text-white bg-dark"
                btnName="light"
            />
            <Reviews/>
            <Footer/>
        </Fragment>
    );
};

export default Affiliate;
