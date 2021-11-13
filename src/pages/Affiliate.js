import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import HowAffiliateWork from "../Components/HowAffiliateWork/HowAffiliateWork";
import AffiliateCommission from "../Components/AffiliateCommission/AffiliateCommission";
import ListSection from "../Components/SharedComponent/ListSection/ListSection";
import AffiliateTc from "../Components/AffiliateTC/AffiliateTC";
import WhatSection from "../Components/SharedComponent/WhatSection/WhatSection";
import Faq from "../Components/Faq/Faq";
import ListDescSection from "../Components/SharedComponent/ListDescSection/ListDescSection";

const Affiliate = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Join the Affiliate Team"
                desc="Get commissions each time you refer a new customer to LevoHost!"
            />
            <HowAffiliateWork/>
            <AffiliateCommission/>
            <ListSection/>
            <AffiliateTc/>
            <WhatSection
                spcStyle="text-white bg-red"
                btnName="light"

                heading="Ready to become an Affiliate"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid atque cumque eos illo illum impedit in iusto laudantium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam? tium maxime modi, nesciunt quas voluptatum. Ad id quia sed sint totam?"
                btnText="Join Now"
            />
            <Faq/>
            <ListDescSection/>
            <Footer/>
        </Fragment>
    );
};

export default Affiliate;
