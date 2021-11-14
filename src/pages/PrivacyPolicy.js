import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import ListDescSection from "../Components/SharedComponent/ListDescSection/ListDescSection";
import FaqSec from "../Components/Faq/FaqSec/FaqSec";

const PrivacyPolicy = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Privacy Policy"
                desc="At LevoHost we care about your privacy and believe in transparency"
            />
            <ListDescSection/>
            <FaqSec/>
            <Footer/>
        </Fragment>
    );
};

export default PrivacyPolicy;
