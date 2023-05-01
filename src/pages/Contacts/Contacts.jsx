import React from 'react'
import ContactsInfo from '../../components/ContactsInfo/ContactsInfo';
import classes from "./Contacts.module.css"
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import MapForm from '../../components/MapForm/MapForm';

const Contacts = () => {
    return (
        <div className={classes.container} data-testid="contacts-page">
            <h1 className={classes.title}>Контакты</h1>
            <ContactsInfo />
            <FeedbackForm />
            <MapForm />
        </div>
    );
};

export default Contacts