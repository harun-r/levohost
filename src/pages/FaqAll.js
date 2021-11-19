import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import FaqsAllSec from "../Components/Faq/FaqsAllSec";
import ContactForm from "../Components/ContactForm/ContactForm";

const FaqAll = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Frequently Asked Questions"
                desc="fd"
            />
            <FaqsAllSec/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
};

export default FaqAll;
