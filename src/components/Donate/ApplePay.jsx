import React, { useState } from 'react'
import { paymentMethodIcon } from '../../db/db2';

import { Form } from 'react-bootstrap';

import '../Donate/Donate.css'




const ApplePay = ({ amount, name, email, phone }) => {

    // Define state variables for form inputs
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [error, setError] = useState(false); // Error state variable

    // Handle form submission
    const onSubmit = (e) => {
        e.preventDefault();
        // Check if donation option is available
        // If not available, set error state to true
        setError(true);
        // Perform payment processing logic here
        handleSubmit();
    };

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
                        <h4 style={{ textAlign: "center", width: "100%", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
                            <img src={paymentMethodIcon.icon7} alt={paymentMethodIcon.title} width={30}
                                style={{ marginBottom: "0.5rem", }}
                            /> Pay Donation:
                        </h4>
                        <hr className="lines" />
                    </div>
                </center>
            </div>

            <div style={{ margin: '0.5rem 0', color: '#006588', fontFamily: '"kanit", sans-serif' }}>
                <p>Instructions for Apple Pay:</p>
                <ul>
                    <li>Step 1: Make sure you have set up Apple Pay on your device.</li>
                    <li>Step 2: Click the "Pay Now" button to initiate the payment process.</li>
                    <li>Step 3: Authenticate the payment using your device's biometric authentication (e.g., Touch ID, Face ID).</li>
                    <li>Step 4: Review the payment details and confirm the transaction.</li>
                    <li>Step 5: You will receive a confirmation message once the payment is successful.</li>
                </ul>
            </div>

            <div style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
                <p>Amount: $ {amount}.00</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Transaction ID: {generateTransactionId()}</p>
            </div>

            <div className='credit'>
                <Form className="formal mt-5 mb-5" onSubmit={onSubmit}>
                    <div className='credit-card-info--form'>
                        <div className="input_container">
                            <label className="input_label" htmlFor="cardNumber">Card Number:</label>
                            <input
                                className="input_field"
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                required
                                placeholder="0000 0000 0000 0000"
                            />
                        </div>
                        <div className="input_container">
                            <label className="input_label" htmlFor="expirationDate">Expiration Date:</label>
                            <input
                                className="input_field"
                                type="text"
                                id="expirationDate"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                                placeholder="01/23"
                                required
                            />
                        </div>
                        <div className="input_container">
                            <label className="input_label" htmlFor="cvv">CVV:</label>
                            <input
                                className="input_field"
                                type="text"
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCVV(e.target.value)}
                                required
                                placeholder="CVV"
                            />
                        </div>
                        <div className="input_container">
                            <label className="input_label" htmlFor="shippingAddress">Shipping Address:</label>
                            <input
                                className="input_field"
                                type="text"
                                id="shippingAddress"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                placeholder="Enter your shipping address"
                                required
                            />
                        </div>
                    </div>
                    {/* Additional elements */}
                    {/* Add any additional elements you need for the payment form */}
                    {error && <p style={{ color: 'crimson' }}>An error occurred during payment processing. Please try again.</p>}

                    {/* Submit button */}
                    <button style={{
                        fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream", fontSize: "16px",
                        margin: "1rem 0",
                    }}
                        className="purchase--btn" type="submit">
                        <img src={paymentMethodIcon.icon9} alt={paymentMethodIcon.title} width={30}
                            style={{ marginBottom: "0.5rem", }}
                        /> Check Out
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default ApplePay