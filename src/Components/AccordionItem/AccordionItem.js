import React, {Fragment} from 'react';
import {Accordion} from 'react-bootstrap'

/*
* #### Props
* faqNo        = string
* faqQuestion  = string
* faqAnswer    = string
*/

const AccordionItem = props => {
    return (
        <Fragment>
            <Accordion.Item eventKey={props.faqNo}>
                <Accordion.Header>{props.faqQuestion}</Accordion.Header>
                <Accordion.Body>
                    {props.faqAnswer}
                </Accordion.Body>
            </Accordion.Item>
        </Fragment>
    );
};

export default AccordionItem;
