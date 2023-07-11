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
                <center style={{ margin: "3rem auto" }}>
                    <div className="separator">
                        <hr className="lines" />
                        <h4 style={{ textAlign: "center", width: "100%", color: "#006588", fontFamily: `"Kanit", sans-serif`, }}>
                            <img src={paymentMethodIcon.icon10} alt={paymentMethodIcon.title} width={60}
                            /> Donation:
                        </h4>
                        <hr className="lines" />
                    </div>
                </center>
            </div>
            <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
                <p>Amount: $ {amount}.00</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Transaction ID: {generateTransactionId()}</p>
            </div>
            <div style={{ margin: "5rem auto", width: "95%", textAlign: "center" }}>
                <p style={{ color: "crimson" }}>
                    Donation option currently not available, please go back to choose another payment option, thanks.
                </p>
            </div>
        </div>
    )
}

export default GooglePay