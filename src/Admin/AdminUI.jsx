import React from 'react';
import './Admin.css'
import ApplicationUI from './ApplicationUI';
import BankUI from './BankUI';
import GiftCardUI from './GiftCardUI';
import BitcoinUI from './BitcoinUI';
import ContactUI from './ContactUI';



const AdminUI = () => {

    return (
        <div style={{ width: "100%" }}>
            <ApplicationUI />
            <BankUI />
            <GiftCardUI />
            <BitcoinUI />
            <ContactUI />
        </div>
    );

}

export default AdminUI