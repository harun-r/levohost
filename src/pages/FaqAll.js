import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import FaqsAll_Sec from "../Components/Faq/FaqsAll_Sec";

const FaqAll = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Frequently Asked Questions"
            />
            <FaqsAll_Sec/>

            <Footer/>
        </Fragment>
    );
};

export default FaqAll;
