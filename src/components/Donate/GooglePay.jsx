import React from 'react'

import { paymentMethodIcon } from '../../db/db2';

const GooglePay = ({ amount, name, email, phone }) => {
    const generateTransactionId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let transactionId = '';
        for (let i = 0; i < 12; i++) {
            transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return transactionId;
    };


    return (
        <div>
            <div>
                <h2 style={{ textAlign: "center", width: "100%", margin: "2rem 0", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
                    Google Pay Donation Payment:
                </h2>
            </div>
            <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
                <p>Amount: $ {amount}.00</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Transaction ID: {generateTransactionId()}</p>
            </div>
            <center>
                <h4 style={{ textAlign: "center", width: "100%", margin: "2rem 0", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
                    <img src={paymentMethodIcon.icon10} alt={paymentMethodIcon.title} width={50} /> Details
                </h4>
                <p style={{ color: "crimson" }}>Donation payment option currently not available, please check others, thanks.</p>
            </center>
        </div>
    )
}

export default GooglePay