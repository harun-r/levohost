import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Reviews from "../Components/Reviews/Reviews";
import Footer from "../Components/Footer/Footer";
import HowAffiliateWork from "../Components/HowAffiliateWork/HowAffiliateWork";
import AffiliateCommission from "../Components/AffiliateCommission/AffiliateCommission";

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

            <Reviews/>
            <Footer/>
        </Fragment>
    );
};

export default Affiliate;
