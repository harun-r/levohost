import React, {createContext} from 'react';
import {v4 as uuid} from 'uuid';

export const DataContext = createContext();
const DataContextProvider = (props) => {

    const faqGeneral = [
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host. <br/>  For example, if you have any business and you want to sell your products globally then it is very essential to make it available on the web and for that, you will need a web hosting service.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
        {
            id: uuid(),
            question:'What is Web Hosting?',
            answer:'Web hosting is the service that allows your website or web application available to be viewed by others on the internet. Everything on the internet usually needs a web host.'
        },
    ]

    return (
        <DataContext.Provider value={{faqGeneral}}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
