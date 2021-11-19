import React, {Fragment} from 'react';
import ContactInfo from "../Components/ContactInfo/ContactInfo";
import Header from "../Components/Header/Header";
import HeaderSmall from "../Components/HeaderSmall/HeaderSmall";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";

const Contact = () => {
    return (
        <Fragment>
            <Header />
            <HeaderSmall
                heading="Contact Us"
                desc="Whether you have a question, feel free to contact with us."
            />
            <ContactInfo/>
            <ContactForm/>
            <Footer/>
        </Fragment>
    );
};

export default Contact;
