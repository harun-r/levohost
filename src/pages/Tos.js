import React, {Fragment} from 'react';
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import ListDescSection from "../Components/SharedComponent/ListDescSection/ListDescSection";
import FaqSec from "../Components/Faq/FaqSec/FaqSec";
import Footer from "../Components/Footer/Footer";

const Tos = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Terms Of Services"
                desc="You will find policies and agreements for services and products available at LevoHost"
            />
            <ListDescSection/>
            <FaqSec/>
            <Footer/>
        </Fragment>
    );
};

export default Tos;
